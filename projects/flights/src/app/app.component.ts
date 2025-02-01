import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableComponent } from '../../../shared/src/lib/components/table/table.component';
import { IFlight } from '../../../shared/src/lib/interface/flight';
import { TableColumns } from '../../../shared/src/lib/interface/table';
import { FlightQuery } from '../../../shared/src/lib/store/flight/flight.query';
import { FlightService } from './service/flight.service';

@Component({
  selector: 'app-root',
  imports: [TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Flights';

  flightColumns: TableColumns = {
    columns: ['Name', 'Mobile No', 'Email', 'City', 'Address', 'Role'],
    displayedColumns: ['name', 'mobileNo', 'email', 'city', 'address', 'role'],
  };

  flightsDataSource: MatTableDataSource<IFlight> =
    new MatTableDataSource<IFlight>([]);

  constructor(
    private flightService: FlightService,
    private flightQuery: FlightQuery
  ) {}
  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe();

    this.flightQuery.selectAll().subscribe((flights) => {
      this.flightsDataSource.data = flights;
    });
  }
}
