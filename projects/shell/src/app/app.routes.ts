import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  {
    path: 'flights',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: `${environment.urls.flights}/remoteEntry.js`,
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
        remoteEntry: `${environment.urls.hospital}/remoteEntry.js`,
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
        remoteEntry: `${environment.urls.akitaCounter}/remoteEntry.js`,
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
        remoteEntry: `${environment.urls.mfe}/remoteEntry.js`,
        type: 'module',
        exposedModule: './MfeComponent',
      })
        .then((m) => m.AppComponent)
        .catch((err) => console.error(err)),
  },
  { path: '**', component: CounterComponent },
];
