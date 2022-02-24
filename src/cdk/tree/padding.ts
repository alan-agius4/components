/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Directionality} from '@angular/cdk/bidi';
import {coerceNumberProperty, NumberInput} from '@angular/cdk/coercion';
import {Directive, ElementRef, Input, OnDestroy, Optional} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {CdkTree, CdkTreeNode} from './tree';

/** Regex used to split a string on its CSS units. */
const cssUnitPattern = /([A-Za-z%]+)$/;

/**
 * Indent for the children tree dataNodes.
 * This directive will add left-padding to the node to show hierarchy.
 */
@Directive({
  selector: '[cdkTreeNodePadding]',
})
export class CdkTreeNodePadding<T, K = T> implements OnDestroy {
  /** Current padding value applied to the element. Used to avoid unnecessarily hitting the DOM. */
  private _currentPadding: string | null;

  /** Subject that emits when the component has been destroyed. */
  private readonly _destroyed = new Subject<void>();

  /** CSS units used for the indentation value. */
  indentUnits = 'px';

  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  @Input('cdkTreeNodePadding')
  get level(): number {
    return this._level;
  }
  set level(value: NumberInput) {
    this._setLevelInput(value);
  }
  _level: number;

  /**
   * The indent for each level. Can be a number or a CSS string.
   * Default number 40px from material design menu sub-menu spec.
   */
  @Input('cdkTreeNodePaddingIndent')
  get indent(): number | string {
    return this._indent;
  }
  set indent(indent: number | string) {
    this._setIndentInput(indent);
  }
  _indent: number = 40;

  constructor(
    private _treeNode: CdkTreeNode<T, K>,
    private _tree: CdkTree<T, K>,
    private _element: ElementRef<HTMLElement>,
    @Optional() private _dir: Directionality,
  ) {
    this._setPadding();
    if (_dir) {
      _dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => this._setPadding(true));
    }

    // In Ivy the indentation binding might be set before the tree node's data has been added,
    // which means that we'll miss the first render. We have to subscribe to changes in the
    // data to ensure that everything is up to date.
    _treeNode._dataChanges.subscribe(() => this._setPadding());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
  _paddingIndent(): string | null {
    const levelAccessor = this._tree._getLevelAccessor();
    const nodeLevel =
      this._treeNode.data && levelAccessor ? levelAccessor(this._treeNode.data) : null;
    const level = this._level == null ? nodeLevel : this._level;
    return typeof level === 'number' ? `${level * this._indent}${this.indentUnits}` : null;
  }

  _setPadding(forceChange = false) {
    const padding = this._paddingIndent();

    if (padding !== this._currentPadding || forceChange) {
      const element = this._element.nativeElement;
      const paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
      const resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';
      element.style[paddingProp] = padding || '';
      element.style[resetProp] = '';
      this._currentPadding = padding;
    }
  }

  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  protected _setLevelInput(value: NumberInput) {
    // Set to null as the fallback value so that _setPadding can fall back to the node level if the
    // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
    // they set 0 explicitly.
    this._level = coerceNumberProperty(value, null)!;
    this._setPadding();
  }

  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  protected _setIndentInput(indent: number | string) {
    let value = indent;
    let units = 'px';

    if (typeof indent === 'string') {
      const parts = indent.split(cssUnitPattern);
      value = parts[0];
      units = parts[1] || units;
    }

    this.indentUnits = units;
    this._indent = coerceNumberProperty(value);
    this._setPadding();
  }
}
