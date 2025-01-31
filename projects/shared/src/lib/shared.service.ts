import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  getCategories() {
    return [{ name: 'Horror' }, { name: 'Drama' }, { name: 'Romance' }];
  }
}
