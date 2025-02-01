import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IHospital } from '../../interface/hospital';
import { HospitalState, HospitalStore } from './hospital.store';

@Injectable({ providedIn: 'root' })
export class HospitalQuery extends QueryEntity<HospitalState, IHospital> {
  constructor(protected override store: HospitalStore) {
    super(store);
  }
}
