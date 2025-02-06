import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IFlight } from '../../../shared/src/lib/interface/flight';
import { FlightQuery } from '../../../shared/src/lib/store/flight/flight.query';
import { AppComponent } from './app.component';
import { FlightService } from './service/flight.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let flightService: FlightService;
  let flightQuery: FlightQuery;

  const mockFlights: IFlight[] = [
    {
      userId: 1,
      name: 'John Doe',
      mobileNo: '1234567890',
      email: 'john@example.com',
      city: 'New York',
      address: '123 Main St',
      role: 'Customer',
      vendorId: 0,
      password: 'password',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    flightService = TestBed.inject(FlightService);
    flightQuery = TestBed.inject(FlightQuery);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('it should fetch flights and update data source onInit ', () => {
    const getAllFlightsSpy = spyOn(
      flightService,
      'getAllFlights'
    ).and.returnValue(of(mockFlights));

    const selectAllSpy = spyOn(flightQuery, 'selectAll').and.returnValue(
      of(mockFlights)
    );

    component.ngOnInit();

    expect(getAllFlightsSpy).toHaveBeenCalled();

    expect(selectAllSpy).toHaveBeenCalled();

    expect(component.flightsDataSource.data).toEqual(mockFlights);
  });
});
