import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';

export class SessionQuery extends Query<SessionState> {
  allState$ = this.select();
  isLoggedIn$ = this.select((state) => !!state.token);
  selectName$ = this.select('name');

  multiProps$ = this.select(['token', 'name']);
  multiPropsCallback$ = this.select([
    (state) => state.token,
    (state) => state.name,
  ]);

  get isLoggedIn(): boolean {
    return !!this.getValue().token;
  }
  constructor(protected sessionStore: SessionStore) {
    super(sessionStore);
  }
}
