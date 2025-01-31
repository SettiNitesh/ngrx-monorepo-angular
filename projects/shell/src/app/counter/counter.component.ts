import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addToCounter,
  categoriesSelector,
  decrement,
  getCategories,
  getCounter,
  ICategory,
  increment,
  reset,
} from '../../../../shared/src/public-api';

@Component({
  selector: 'app-counter',
  imports: [RouterOutlet, AsyncPipe, FormsModule, CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {
  counter$!: Observable<number>;

  value!: string;

  categories$!: Observable<ICategory[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
    this.categories$ = this.store.select(categoriesSelector);
    this.store.dispatch(getCategories());
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }

  addToCounter(): void {
    this.store.dispatch(addToCounter({ value: +this.value }));
  }
}
