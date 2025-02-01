import { Action } from '@ngrx/store';
import { ICounterState } from './counter.state';
export declare const counterReducer: (state: ICounterState | undefined, action: Action) => ICounterState;
