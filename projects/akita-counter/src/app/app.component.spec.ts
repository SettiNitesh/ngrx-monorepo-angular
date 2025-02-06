import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CounterQuery } from '../store/counter/counter.query';
import { AppComponent } from './app.component';
import { CounterService } from './service/counter.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let counterQuery: jasmine.SpyObj<CounterQuery>;
  let counterService: jasmine.SpyObj<CounterService>;

  beforeEach(async () => {
    counterQuery = jasmine.createSpyObj('CounterQuery', ['getCount']);
    counterService = jasmine.createSpyObj('CounterService', [
      'increment',
      'decrement',
      'reset',
    ]);

    counterQuery.getCount.and.returnValue(of(0));

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: CounterQuery, useValue: counterQuery },
        { provide: CounterService, useValue: counterService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize counter$ with value from CounterQuery', () => {
    const expectedCount = 5;

    counterQuery.getCount.and.returnValue(of(expectedCount));

    component.ngOnInit();

    component.counter$.subscribe((value) => {
      expect(value).toBe(expectedCount);
    });

    expect(counterQuery.getCount).toHaveBeenCalled();
  });

  it('should call counterService.increment when increment is called', () => {
    component.increment();

    expect(counterService.increment).toHaveBeenCalled();
  });

  it('should call counterService.decrement when decrement is called', () => {
    component.decrement();

    expect(counterService.decrement).toHaveBeenCalled();
  });

  it('should call counterService.reset when reset is called', () => {
    component.reset();

    expect(counterService.reset).toHaveBeenCalled();
  });
});
