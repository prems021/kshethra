import { Component,Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Driver } from '../services/mock';
import { Parse } from '../services/mock';
import { DataService } from '../services/data.service';
import 'rxjs/add/operator/toPromise';
import { Observable }        from 'rxjs/Observable';
@Component({
 
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  parsedata : Object[]= [new Parse(0,'','',true,new Date() ,'','','','','',0,'',0)];

   driverlist : Object[] = [];
   progress: number = 0;
 
  constructor( private router: Router, private Ds : DataService ) { }

  getdata() : void{
      this.Ds.getuserlist().then(parsedata=> this.parsedata = parsedata )
     
       
     
  }
 getdriverdetails() : void{
      this.Ds.getdriverlist().then(driverlist=> this.driverlist = driverlist )
     
  }



   ngOnInit()  {
     this.getdata()
      setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
     this.getdriverdetails();
  }
}