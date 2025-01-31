import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('reset');
export const addToCounter = createAction(
  'addToCounter',
  props<{ value: number }>()
);
