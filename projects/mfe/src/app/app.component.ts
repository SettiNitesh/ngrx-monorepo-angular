import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { addCategory } from '../../../shared/src/public-api';

@Component({
  selector: 'app-root',
  imports: [RouterModule, FormsModule],
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
