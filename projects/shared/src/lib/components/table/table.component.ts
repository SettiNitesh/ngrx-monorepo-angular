import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableColumns } from '../../interface/table';

@Component({
  selector: 'lib-table',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
    MatPaginator,
    MatSortHeader,
    MatSortModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements AfterViewInit {
  @Input({ required: true }) tableTitle!: string;
  @Input({ required: true }) dataSource!: MatTableDataSource<any>;
  @Input({ required: true }) columns!: TableColumns;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}
  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
}
