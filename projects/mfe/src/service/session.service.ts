import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStore } from '../store/session/session.store';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private sessionStore: SessionStore, private http: HttpClient) {}

  async updateUserName(newName: string): Promise<void> {
    this.sessionStore.setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      this.sessionStore.update((_state) => ({
        name: newName,
      }));
    } catch (error) {
      this.sessionStore.setError(error);
    } finally {
      this.sessionStore.setLoading(false);
      this.sessionStore.destroy();
    }
  }
}
