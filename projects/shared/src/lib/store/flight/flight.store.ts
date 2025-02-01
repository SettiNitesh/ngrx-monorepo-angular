import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IFlight } from '../../interface/flight';

export interface FlightState extends EntityState<IFlight> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'flights', idKey: 'userId' })
export class FlightStore extends EntityStore<FlightState, IFlight> {
  constructor() {
    super();
  }
}
