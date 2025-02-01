import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableComponent } from '../../../shared/src/lib/components/table/table.component';
import { IHospital } from '../../../shared/src/lib/interface/hospital';
import { TableColumns } from '../../../shared/src/lib/interface/table';
import { HospitalQuery } from '../../../shared/src/lib/store/hospital/hospital.query';
import { HospitalService } from './service/hospital.service';

@Component({
  selector: 'app-root',
  imports: [TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hospitals';

  hospitalColumns: TableColumns = {
    columns: ['Name', 'Mobile No', 'City', 'Age', 'Gender'],
    displayedColumns: ['name', 'mobileNo', 'city', 'age', 'gender'],
  };

  hospitalsDataSource: MatTableDataSource<IHospital> =
    new MatTableDataSource<IHospital>([]);

  constructor(
    private hospitalService: HospitalService,
    private hospitalQuery: HospitalQuery
  ) {}
  ngOnInit(): void {
    this.hospitalService.getAllHospitals().subscribe();

    this.hospitalQuery.selectAll().subscribe((hospitals) => {
      this.hospitalsDataSource.data = hospitals;
    });
  }
}
