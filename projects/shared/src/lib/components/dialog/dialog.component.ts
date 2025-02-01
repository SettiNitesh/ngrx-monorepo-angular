import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'lib-dialog',
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
