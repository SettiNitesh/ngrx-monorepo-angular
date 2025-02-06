import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {
  TestBed,
  fakeAsync,
  flushMicrotasks,
  tick,
} from '@angular/core/testing';
import { SessionStore } from '../store/session/session.store';
import { SessionService } from './session.service';

describe('SessionService', () => {
  let service: SessionService;
  let sessionStoreSpy: jasmine.SpyObj<SessionStore>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('SessionStore', [
      'setLoading',
      'update',
      'setError',
      'destroy',
    ]);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        SessionService,
        { provide: SessionStore, useValue: spy },
      ],
    });

    service = TestBed.inject(SessionService);
    sessionStoreSpy = TestBed.inject(
      SessionStore
    ) as jasmine.SpyObj<SessionStore>;
  });

  it('should update user name successfully', fakeAsync(() => {
    const newName = 'John Doe';

    let promiseResolved = false;

    service.updateUserName(newName).then(() => {
      promiseResolved = true;
    });

    expect(sessionStoreSpy.setLoading).toHaveBeenCalledWith(true);

    tick(300);

    flushMicrotasks();

    expect(sessionStoreSpy.update).toHaveBeenCalledWith({ name: newName });
    expect(sessionStoreSpy.setLoading).toHaveBeenCalledWith(false);
    expect(sessionStoreSpy.destroy).toHaveBeenCalled();

    expect(promiseResolved).toBeTrue();
  }));

  it('should handle error during update', fakeAsync(() => {
    const newName = 'Jane Doe';

    const errorMessage = 'Error updating';

    let promiseResolved = false;

    sessionStoreSpy.update.and.callFake(() => {
      throw new Error(errorMessage);
    });

    service.updateUserName(newName).then(() => {
      promiseResolved = true;
    });

    expect(sessionStoreSpy.setLoading).toHaveBeenCalledWith(true);

    tick(300);

    flushMicrotasks();

    expect(sessionStoreSpy.setError).toHaveBeenCalledWith(jasmine.any(Error));
    expect(sessionStoreSpy.setLoading).toHaveBeenCalledWith(false);
    expect(sessionStoreSpy.destroy).toHaveBeenCalled();

    expect(promiseResolved).toBeTrue();
  }));
});
