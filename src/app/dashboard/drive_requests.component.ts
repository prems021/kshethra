import { Component, OnInit } from '@angular/core';
import { Driver } from '../services/mock';
import { DataService } from '../services/data.service';
import 'rxjs/add/operator/toPromise';
import { Observable }        from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
  selector: 'drive-requests',
  templateUrl: 'drive_requests.component.html',
  styleUrls: ['usertable.component.css']
})
export class DriverequestComponent implements OnInit {
 // parsedata : Object[]= [new Parse(0,'','',true,new Date() ,'','','','','',0,'',0)];
  drivers : Driver[];
  driver : Driver;
 constructor( private router: Router, private Ds : DataService ) { }
   
   getdata() : any{
                            this.Ds.getonlinedriver().then(drivers=> this.driver = drivers )
                            console.log('data==',this.driver);
                  }
   
 
  
  ngOnInit() {
 
      this.getdata();
  }

}