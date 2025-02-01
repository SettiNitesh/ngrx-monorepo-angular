import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IFlight } from '../../interface/flight';
import { FlightState, FlightStore } from './flight.store';

@Injectable({ providedIn: 'root' })
export class FlightQuery extends QueryEntity<FlightState, IFlight> {
  constructor(protected override store: FlightStore) {
    super(store);
  }
}
