import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  selectedUniv : any;

  constructor(private http:HttpClient) { }

  getUniversities(){
    return this.http.get('http://universities.hipolabs.com/search?country=United+States')
  }

  setUnivInfo(univinfo : any){
    this.selectedUniv = univinfo;
  }

  getUnivInfo(){
    return this.selectedUniv;
  }

}
