import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the menu when toggleMenu is called', () => {
    expect(component.isMenuOpen).toBeFalse();

    component.toggleMenu();

    expect(component.isMenuOpen).toBeTrue();

    component.toggleMenu();

    expect(component.isMenuOpen).toBeFalse();
  });

  it('should close the menu when closeMenu is called', () => {
    component.isMenuOpen = true;

    expect(component.isMenuOpen).toBeTrue();

    component.closeMenu();

    expect(component.isMenuOpen).toBeFalse();
  });
});
