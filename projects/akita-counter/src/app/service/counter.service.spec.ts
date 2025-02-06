import { TestBed } from '@angular/core/testing';
import { CounterStore } from '../../store/counter/counter.store';
import { CounterService } from './counter.service';

describe('Service: Counter', () => {
  let service: CounterService;
  let counterStore: CounterStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
    });

    service = TestBed.inject(CounterService);
    counterStore = TestBed.inject(CounterStore);
  });

  it('should initialize a service', () => {
    expect(service).toBeTruthy();
  });

  it('should increment a counter', () => {
    service.increment();
    expect(counterStore.getValue().count).toBe(1);
  });

  it('should decrement a counter', () => {
    service.decrement();
    expect(counterStore.getValue().count).toBe(-1);
  });

  it('should increment a counter', () => {
    service.reset();
    expect(counterStore.getValue().count).toBe(0);
  });
});
