import * as i0 from '@angular/core';
import { Component, Injectable, inject, model, signal, Input } from '@angular/core';
import { createAction, props, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialog } from '@angular/material/dialog';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';

class SharedComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SharedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: SharedComponent, isStandalone: true, selector: "lib-shared", ngImport: i0, template: `
    <p>
      shared works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SharedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-shared', imports: [], template: `
    <p>
      shared works!
    </p>
  ` }]
        }] });

class SharedService {
    constructor() { }
    getCategories() {
        return [{ name: 'Horror' }, { name: 'Drama' }, { name: 'Romance' }];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SharedService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const getCategories = createAction('[Category Component] GetCategories');
const addCategory = createAction('[Category Component] Add Category', props());

const initialState = {
    categories: [{ name: 'Horror' }, { name: 'Drama' }, { name: 'Romance' }],
};
const categories = 'categories';

const categoryReducer = createReducer(initialState, on(getCategories, (state) => ({
    ...state,
    categories: state.categories,
})), on(addCategory, (state, action) => ({
    ...state,
    categories: [...state.categories, action.category],
})));

const selectCategories = createFeatureSelector(categories);
const categoriesSelector = createSelector(selectCategories, (state) => state.categories);

const increment = createAction('[Counter] Increment');
const decrement = createAction('[Counter] Decrement');
const reset = createAction('reset');
const addToCounter = createAction('addToCounter', props());

const initialCounterState = {
    counter: 0,
};

const _counterReducer = createReducer(initialCounterState, on(increment, (state) => {
    return { ...state, counter: state.counter + 1 };
}), on(decrement, (state) => {
    return { ...state, counter: state.counter - 1 };
}), on(reset, (state) => {
    return { ...state, counter: 0 };
}), on(addToCounter, (state, action) => {
    return { ...state, counter: state.counter + action.value };
}));
const counterReducer = (state = initialCounterState, action) => {
    return _counterReducer(state, action);
};

const getCounterState = createFeatureSelector('counter');
const getCounter = createSelector(getCounterState, (state) => state.counter);

class DialogComponent {
    dialogRef = inject((MatDialogRef));
    data = inject(MAT_DIALOG_DATA);
    animal = model(this.data.animal);
    onNoClick() {
        this.dialogRef.close();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.1.4", type: DialogComponent, isStandalone: true, selector: "lib-dialog", inputs: { animal: { classPropertyName: "animal", publicName: "animal", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { animal: "animalChange" }, ngImport: i0, template: "<mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"animal\" />\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"animal()\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n", styles: [""], dependencies: [{ kind: "directive", type: MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dialog', imports: [
                        MatDialogActions,
                        MatDialogClose,
                        MatDialogContent,
                        MatFormFieldModule,
                        FormsModule,
                        MatButtonModule,
                        MatInputModule,
                    ], template: "<mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"animal\" />\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"animal()\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n" }]
        }] });

class ButtonComponent {
    color = 'primary';
    variant = 'basic';
    disabled = false;
    icon;
    animal = signal('');
    name = model('');
    dialog = inject(MatDialog);
    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent, {
            data: { name: this.name(), animal: this.animal() },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
            if (result !== undefined) {
                this.animal.set(result);
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: ButtonComponent, isStandalone: true, selector: "lib-button", inputs: { color: { classPropertyName: "color", publicName: "color", isSignal: false, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: false, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: false, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: false, isRequired: false, transformFunction: null }, name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { name: "nameChange" }, ngImport: i0, template: "<ol>\n  <li>\n    <mat-form-field>\n      <mat-label>What's your name?</mat-label>\n      <input matInput [(ngModel)]=\"name\" />\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  @if (animal()) {\n  <li>\n    You chose: <em>{{ animal() }}</em>\n  </li>\n  }\n</ol>\n", styles: [".example-card{max-width:400px;color:#fff}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.example-card-footer{padding:16px}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule], template: "<ol>\n  <li>\n    <mat-form-field>\n      <mat-label>What's your name?</mat-label>\n      <input matInput [(ngModel)]=\"name\" />\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  @if (animal()) {\n  <li>\n    You chose: <em>{{ animal() }}</em>\n  </li>\n  }\n</ol>\n", styles: [".example-card{max-width:400px;color:#fff}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.example-card-footer{padding:16px}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });

/*
 * Public API Surface of shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, SharedComponent, SharedService, addCategory, addToCounter, categories, categoriesSelector, categoryReducer, counterReducer, decrement, getCategories, getCounter, increment, initialCounterState, initialState, reset };
//# sourceMappingURL=shared.mjs.map
