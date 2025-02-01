import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CounterState, initialCounterState } from './counter.state';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'counter' })
export class CounterStore extends Store<CounterState> {
  constructor() {
    super(initialCounterState());
  }
}
