import { Component, inject, Input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'lib-button',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() variant: 'basic' | 'raised' | 'stroked' | 'flat' = 'basic';
  @Input() disabled = false;
  @Input() icon?: string;

  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
