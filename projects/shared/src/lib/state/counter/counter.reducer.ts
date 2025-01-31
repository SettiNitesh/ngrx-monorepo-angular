import { Action, createReducer, on } from '@ngrx/store';
import { addToCounter, decrement, increment, reset } from './counter.actions';
import { ICounterState, initialCounterState } from './counter.state';

const _counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, (state) => {
    return { ...state, counter: 0 };
  }),
  on(addToCounter, (state, action) => {
    return { ...state, counter: state.counter + action.value };
  })
);

export const counterReducer = (
  state: ICounterState = initialCounterState,
  action: Action
): ICounterState => {
  return _counterReducer(state, action);
};
