import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { addCategory } from '../../../shared/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  value!: string;

  constructor(private readonly store: Store) {}

  addCategory(): void {
    this.store.dispatch(addCategory({ category: { name: this.value } }));
    this.value = '';
  }
}
