import { Router } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-univ-info',
  templateUrl: './univ-info.component.html',
  styleUrls: ['./univ-info.component.css']
})
export class UnivInfoComponent implements OnInit {

  universityInfo : any;

  constructor(private globalService:GlobalService,private router:Router) { }

  ngOnInit(): void {
    this.universityInfo = this.globalService.getUnivInfo();
    if(this.universityInfo){
      return;
    }else{
      this.router.navigate(['/home'])
    }
  }

}
