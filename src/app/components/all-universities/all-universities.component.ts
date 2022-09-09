import { GlobalService } from './../../services/global.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-universities',
  templateUrl: './all-universities.component.html',
  styleUrls: ['./all-universities.component.scss']
})
export class AllUniversitiesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'country', 'domain', 'webpage'];
  universities: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private globalService:GlobalService,private router:Router) { }

  ngOnInit(): void {
    this.getUniv()
  }

  getUniv(){
    this.globalService.getUniversities().subscribe(
      (data:any)=>{
        this.universities = new MatTableDataSource(data);
        this.universities.paginator = this.paginator;
        this.universities.sort = this.sort;
      }
    );
  }

  ngAfterViewInit() {
    this.universities.paginator = this.paginator;
    this.universities.sort = this.sort;
  }

  goToUnivInfoPage(data: any){
    this.globalService.setUnivInfo(data);
    this.router.navigate(['/university/',data.alpha_two_code])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.universities.filter = filterValue.trim().toLowerCase();
    if (this.universities.paginator) {
      this.universities.paginator.firstPage();
    }
  }

}
