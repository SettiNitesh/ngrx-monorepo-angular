import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IFlight } from '../../../../shared/src/lib/interface/flight';
import { FlightStore } from '../../../../shared/src/lib/store/flight/flight.store';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FlightService {
  constructor(private http: HttpClient, private flightStore: FlightStore) {}

  getAllFlights(): Observable<IFlight[]> {
    return this.http
      .get(environment.API_URL + 'FlightBooking/GetAllCustomer')
      .pipe(
        map((res: any) => {
          const transformedData = res.data.map((item: IFlight) => ({
            ...item,
            name: item.name || 'NA',
            mobileNo: item.mobileNo || 'NA',
            email: item.email || 'NA',
            city: item.city || 'NA',
            address: item.address || 'NA',
            role: item.role || 'NA',
          }));
          return transformedData;
        }),
        tap((transformedData) => {
          this.flightStore.set(transformedData);
        })
      );
  }
}
