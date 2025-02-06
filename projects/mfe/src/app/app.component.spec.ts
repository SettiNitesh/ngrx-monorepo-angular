import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { addCategory } from '../../../shared/src/public-api';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let dispatchSpy: jasmine.Spy;
  let store: MockStore;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideMockStore(), provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);

    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('add category', () => {
    component.value = '';

    component.addCategory();

    expect(dispatchSpy).toHaveBeenCalledWith(
      addCategory({ category: { name: component.value } })
    );
  });
});
