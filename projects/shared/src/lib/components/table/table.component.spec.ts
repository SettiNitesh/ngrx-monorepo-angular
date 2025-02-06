import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TableColumns } from '../../../../../../dist/shared/lib/interface/table';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;

    component.tableTitle = 'Test Table';
    component.dataSource = new MatTableDataSource([{ name: 'John' }]);
    component.columns = {
      columns: ['Name'],
      displayedColumns: ['name'],
    } as TableColumns;

    const dummyPaginator = {} as MatPaginator;
    const dummySort = {} as MatSort;

    component.paginator = dummyPaginator;
    component.sort = dummySort;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the table after view init', () => {
    component.ngAfterViewInit();

    expect(component.dataSource.paginator).toBe(component.paginator);
    expect(component.dataSource.sort).toBe(component.sort);
  });
});
