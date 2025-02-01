import * as i0 from '@angular/core';
import { Component, Injectable } from '@angular/core';
import { createAction, props, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

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

/*
 * Public API Surface of shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SharedComponent, SharedService, addCategory, addToCounter, categories, categoriesSelector, categoryReducer, counterReducer, decrement, getCategories, getCounter, increment, initialCounterState, initialState, reset };
//# sourceMappingURL=shared.mjs.map
