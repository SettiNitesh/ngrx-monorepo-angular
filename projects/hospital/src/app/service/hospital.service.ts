import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IHospital } from '../../../../shared/src/lib/interface/hospital';
import { HospitalStore } from '../../../../shared/src/lib/store/hospital/hospital.store';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  constructor(private http: HttpClient, private hospitalStore: HospitalStore) {}

  getAllHospitals(): Observable<IHospital[]> {
    return this.http
      .get(
        'https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetAllPatients'
      )
      .pipe(
        map((res: any) => {
          const transformedData = res.data.map((item: IHospital) => ({
            ...item,
            name: item.name || 'NA',
            mobileNo: item.mobileNo || 'NA',
            city: item.city || 'NA',
            age: item.age || 'NA',
            gender: item.gender || 'NA',
          }));
          return transformedData;
        }),
        tap((transformedData) => {
          this.hospitalStore.set(transformedData);
        })
      );
  }
}
