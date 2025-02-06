import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IFlight } from '../../../../shared/src/lib/interface/flight';
import { FlightStore } from '../../../../shared/src/lib/store/flight/flight.store';
import { environment } from '../../environments/environment';
import { FlightService } from './flight.service';

describe('Service: Flight', () => {
  let flightService: FlightService;
  let flightStore: FlightStore;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlightService,
        FlightStore,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    flightService = TestBed.inject(FlightService);
    flightStore = TestBed.inject(FlightStore);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should initialize flight Service', () => {
    expect(flightService).toBeTruthy();
  });

  it('should fetch data and transform flights', () => {
    const mockResponse = {
      message: '',
      result: true,
      data: [
        {
          userId: 128,
          name: 'Rahul',
          mobileNo: '9999999988',
          email: 'rahul@dummy.com',
          city: 'Pune',
          address: '112233',
          role: 'Customer',
          vendorId: 0,
        },
        {
          userId: 129,
          name: '',
          mobileNo: '',
          email: '',
          city: '',
          address: '',
          role: '',
          vendorId: 0,
        },
      ],
    };

    const transformedData: IFlight[] = [
      {
        userId: 128,
        name: 'Rahul',
        mobileNo: '9999999988',
        email: 'rahul@dummy.com',
        city: 'Pune',
        address: '112233',
        role: 'Customer',
        vendorId: 0,
      },
      {
        userId: 129,
        name: 'NA',
        mobileNo: 'NA',
        email: 'NA',
        city: 'NA',
        address: 'NA',
        role: 'NA',
        vendorId: 0,
      },
    ];

    const storeSpy = spyOn(flightStore, 'set');

    flightService.getAllFlights().subscribe((flights) => {
      expect(flights).toEqual(transformedData);
      expect(storeSpy).toHaveBeenCalledWith(transformedData);
    });

    const req = httpMock.expectOne(
      environment.API_URL + 'FlightBooking/GetAllCustomer'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});
