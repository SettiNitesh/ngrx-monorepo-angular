import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    color: 'primary' | 'accent' | 'warn';
    variant: 'basic' | 'raised' | 'stroked' | 'flat';
    disabled: boolean;
    icon?: string;
    readonly animal: import("@angular/core").WritableSignal<string>;
    readonly name: import("@angular/core").ModelSignal<string>;
    readonly dialog: MatDialog;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "lib-button", never, { "color": { "alias": "color"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "name": { "alias": "name"; "required": false; "isSignal": true; }; }, { "name": "nameChange"; }, never, never, true, never>;
}
