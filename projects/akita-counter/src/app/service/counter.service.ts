import { Injectable } from '@angular/core';
import { CounterStore } from '../../store/counter/counter.store';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor(private counterStore: CounterStore) {}

  increment() {
    this.counterStore.update((state) => ({ count: state.count + 1 }));
  }

  decrement() {
    this.counterStore.update((state) => ({ count: state.count - 1 }));
  }

  reset() {
    this.counterStore.update(() => ({ count: 0 }));
  }
}
