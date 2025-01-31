import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  {
    path: 'mfe',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        type: 'module',
        exposedModule: './MfeComponent',
      })
        .then((m) => m.AppComponent)
        .catch((err) => console.error(err)),
  },
  { path: '**', component: CounterComponent },
];
