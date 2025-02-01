import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { CounterState } from './counter.state';
import { CounterStore } from './counter.store';

@Injectable({ providedIn: 'root' })
export class CounterQuery extends Query<CounterState> {
  getCount(): Observable<number> {
    return this.select((state) => state.count);
  }
  constructor(protected override store: CounterStore) {
    super(store);
  }
}
