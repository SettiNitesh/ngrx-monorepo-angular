import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  addToCounter,
  decrement,
  increment,
  reset,
} from '../../../../shared/src/public-api';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  const initialState = {
    counter: 0,
    categories: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
      providers: [provideMockStore({ initialState }), provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);

    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch increment action when button is clicked', () => {
    component.increment();

    expect(dispatchSpy).toHaveBeenCalledWith(increment());
  });

  it('should dispatch decrement action when button is clicked', () => {
    component.decrement();

    expect(dispatchSpy).toHaveBeenCalledWith(decrement());
  });

  it('should dispatch reset action when button is clicked', () => {
    component.reset();

    expect(dispatchSpy).toHaveBeenCalledWith(reset());
  });

  it('should dispatch the add to counter when called addToCounter action ', () => {
    component.addToCounter();

    expect(dispatchSpy).toHaveBeenCalledWith(
      addToCounter({ value: +component.value })
    );
  });
});
