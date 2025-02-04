import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { ButtonComponent } from '../../../shared/src/public-api';
import { CounterQuery } from '../store/counter/counter.query';
import { CounterService } from './service/counter.service';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, MatIconModule, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  counter$ = new Observable<number>();
  constructor(
    private counterQuery: CounterQuery,
    private counterService: CounterService
  ) {}
  ngOnInit(): void {
    this.counter$ = this.counterQuery.getCount();
  }

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }
  reset(): void {
    this.counterService.reset();
  }
}
