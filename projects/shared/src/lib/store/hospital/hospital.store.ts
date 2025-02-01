import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IHospital } from '../../interface/hospital';

export interface HospitalState extends EntityState<IHospital> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'hospitals', idKey: 'patientId' })
export class HospitalStore extends EntityStore<HospitalState, IHospital> {
  constructor() {
    super();
  }
}
