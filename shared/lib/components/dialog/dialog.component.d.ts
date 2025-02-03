import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface DialogData {
    animal: string;
    name: string;
}
export declare class DialogComponent {
    readonly dialogRef: MatDialogRef<any, any>;
    readonly data: DialogData;
    readonly animal: import("@angular/core").ModelSignal<string>;
    onNoClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogComponent, "lib-dialog", never, { "animal": { "alias": "animal"; "required": false; "isSignal": true; }; }, { "animal": "animalChange"; }, never, never, true, never>;
}
