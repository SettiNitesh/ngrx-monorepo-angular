import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { of } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let dialogMock: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    dialogMock = jasmine.createSpyObj(['open']);

    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
      providers: [
        provideAnimationsAsync(),
        { provide: MatDialog, useValue: dialogMock },
        { provide: MatDialogRef, useValue: { afterClosed: () => of() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('open dialog', () => {
    const mockDialogRef = {
      afterClosed: () => of('Dog'),
    } as MatDialogRef<DialogComponent>;

    dialogMock.open.and.returnValue(mockDialogRef);

    component.openDialog();

    expect(dialogMock.open).toHaveBeenCalledWith(DialogComponent, {
      data: { name: '', animal: '' },
    });
  });

  it('closes dialog', () => {
    const mockDialogRef = {
      afterClosed: () => of('Cat'),
    } as MatDialogRef<DialogComponent>;

    dialogMock.open.and.returnValue(mockDialogRef);

    component.openDialog();

    expect(component.animal()).toBe('Cat');
  });
});
