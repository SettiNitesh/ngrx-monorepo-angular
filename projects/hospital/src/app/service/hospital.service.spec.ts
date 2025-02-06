import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { IHospital } from '../../../../shared/src/lib/interface/hospital';
import { HospitalStore } from '../../../../shared/src/lib/store/hospital/hospital.store';
import { HospitalService } from './hospital.service';

describe('HospitalService', () => {
  let service: HospitalService;
  let hospitalStore: HospitalStore;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HospitalService,
        HospitalStore,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(HospitalService);
    hospitalStore = TestBed.inject(HospitalStore);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data and transform hospitals', () => {
    const mockResponse = {
      message: '',
      result: true,
      data: [
        {
          patientId: 754,
          name: 'bbbb',
          mobileNo: 'jkkk',
          city: 'nnnn',
          age: 0,
          gender: 'mmmm',
        },
        {
          patientId: 1179,
          name: '',
          mobileNo: '',
          city: '',
          age: 0,
          gender: '',
        },
      ],
    };

    const transformedResponse: IHospital[] = [
      {
        patientId: 754,
        name: 'bbbb',
        mobileNo: 'jkkk',
        city: 'nnnn',
        age: 0,
        gender: 'mmmm',
      },
      {
        patientId: 1179,
        name: 'NA',
        mobileNo: 'NA',
        city: 'NA',
        age: 0,
        gender: 'NA',
      },
    ];

    const hospitalStoreSpy = spyOn(hospitalStore, 'set');

    service.getAllHospitals().subscribe({
      next: (hospitals) => {
        expect(hospitals).toEqual(transformedResponse);
        expect(hospitalStoreSpy).toHaveBeenCalledWith(transformedResponse);
      },
    });

    const req = httpMock.expectOne(
      'https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetAllPatients'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});
