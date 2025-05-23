## API Report File for "@angular/material_card"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import { InjectionToken } from '@angular/core';

// @public
export const MAT_CARD_CONFIG: InjectionToken<MatCardConfig>;

// @public
export class MatCard {
    constructor(...args: unknown[]);
    // (undocumented)
    appearance: MatCardAppearance;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatCard, "mat-card", ["matCard"], { "appearance": { "alias": "appearance"; "required": false; }; }, {}, never, ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCard, never>;
}

// @public
export class MatCardActions {
    align: 'start' | 'end';
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardActions, "mat-card-actions", ["matCardActions"], { "align": { "alias": "align"; "required": false; }; }, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardActions, never>;
}

// @public (undocumented)
export type MatCardAppearance = 'outlined' | 'raised' | 'filled';

// @public
export class MatCardAvatar {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardAvatar, "[mat-card-avatar], [matCardAvatar]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardAvatar, never>;
}

// @public
export interface MatCardConfig {
    appearance?: MatCardAppearance;
}

// @public
export class MatCardContent {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardContent, "mat-card-content", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardContent, never>;
}

// @public
export class MatCardFooter {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardFooter, "mat-card-footer", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardFooter, never>;
}

// @public
export class MatCardHeader {
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatCardHeader, "mat-card-header", never, {}, {}, never, ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardHeader, never>;
}

// @public
export class MatCardImage {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardImage, "[mat-card-image], [matCardImage]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardImage, never>;
}

// @public
export class MatCardLgImage {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardLgImage, "[mat-card-lg-image], [matCardImageLarge]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardLgImage, never>;
}

// @public
export class MatCardMdImage {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardMdImage, "[mat-card-md-image], [matCardImageMedium]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardMdImage, never>;
}

// @public (undocumented)
export class MatCardModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatCardModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatCardModule, never, [typeof MatCommonModule, typeof MatCard, typeof MatCardActions, typeof MatCardAvatar, typeof MatCardContent, typeof MatCardFooter, typeof MatCardHeader, typeof MatCardImage, typeof MatCardLgImage, typeof MatCardMdImage, typeof MatCardSmImage, typeof MatCardSubtitle, typeof MatCardTitle, typeof MatCardTitleGroup, typeof MatCardXlImage], [typeof MatCard, typeof MatCardActions, typeof MatCardAvatar, typeof MatCardContent, typeof MatCardFooter, typeof MatCardHeader, typeof MatCardImage, typeof MatCardLgImage, typeof MatCardMdImage, typeof MatCardSmImage, typeof MatCardSubtitle, typeof MatCardTitle, typeof MatCardTitleGroup, typeof MatCardXlImage, typeof MatCommonModule]>;
}

// @public
export class MatCardSmImage {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardSmImage, "[mat-card-sm-image], [matCardImageSmall]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardSmImage, never>;
}

// @public
export class MatCardSubtitle {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardSubtitle, "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardSubtitle, never>;
}

// @public
export class MatCardTitle {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardTitle, "mat-card-title, [mat-card-title], [matCardTitle]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardTitle, never>;
}

// @public
export class MatCardTitleGroup {
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatCardTitleGroup, "mat-card-title-group", never, {}, {}, never, ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardTitleGroup, never>;
}

// @public
export class MatCardXlImage {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCardXlImage, "[mat-card-xl-image], [matCardImageXLarge]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCardXlImage, never>;
}

// (No @packageDocumentation comment for this package)

```
