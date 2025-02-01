import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  {
    path: 'flights',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4209/remoteEntry.js',
        type: 'module',
        exposedModule: './FlightComponent',
      })
        .then((m) => m.AppComponent)
        .catch((err) => console.error(err)),
  },
  {
    path: 'hospitals',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4500/remoteEntry.js',
        type: 'module',
        exposedModule: './HospitalComponent',
      })
        .then((m) => m.AppComponent)
        .catch((err) => console.error(err)),
  },
  {
    path: 'akita-counter',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4400/remoteEntry.js',
        type: 'module',
        exposedModule: './AkitaCounterComponent',
      })
        .then((m) => m.AppComponent)
        .catch((err) => console.error(err)),
  },
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
