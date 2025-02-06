import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  token: string;
  name: string;
}

export const createInitialState = (): SessionState => {
  return { token: '', name: '' };
};

@StoreConfig({
  name: 'session',
  resettable: true,
  cache: {
    ttl: 3600000,
  },
})
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
