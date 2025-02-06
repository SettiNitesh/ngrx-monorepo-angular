import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IHospital } from '../../../shared/src/lib/interface/hospital';
import { HospitalQuery } from '../../../shared/src/lib/store/hospital/hospital.query';
import { AppComponent } from './app.component';
import { HospitalService } from './service/hospital.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let hospitalService: HospitalService;
  let hospitalQuery: HospitalQuery;
  let fixture: ComponentFixture<AppComponent>;

  const mockHospitals: IHospital[] = [
    {
      patientId: 754,
      name: 'bbbb',
      mobileNo: 'jkkk',
      city: 'nnnn',
      age: 0,
      gender: 'mmmm',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    hospitalQuery = TestBed.inject(HospitalQuery);
    hospitalService = TestBed.inject(HospitalService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('it should fetch hospitals and update data source onInit', () => {
    const hospitalServiceSpy = spyOn(
      hospitalService,
      'getAllHospitals'
    ).and.returnValue(of(mockHospitals));

    const hospitalQuerySpy = spyOn(hospitalQuery, 'selectAll').and.returnValue(
      of(mockHospitals)
    );

    component.ngOnInit();

    expect(hospitalServiceSpy).toHaveBeenCalled();

    expect(hospitalQuerySpy).toHaveBeenCalled();

    expect(component.hospitalsDataSource.data).toEqual(mockHospitals);
  });
});
