import { Component, OnInit } from '@angular/core';
import { Parse } from './mocks';
import { DataService } from '../services/data.service';
import 'rxjs/add/operator/toPromise';
import { Observable }        from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
    
  selector: 'user-table',
  templateUrl: 'usertable.component.html',
  styleUrls: ['usertable.component.css']
})
export class UsertableComponent implements OnInit {
  parsedata : Object[]= [new Parse(0,'','',true,new Date() ,'','','','','',0,'',0)];
  name: string;
  lastName: string;
  imgBackground: string;
  urlImgUser: string;
  styleBackground: string;
  hiddeInfoUser: boolean = true;
 constructor( private router: Router, private Ds : DataService ) { }
   
   getdata() : void{
      this.Ds.getuserlist().then(parsedata=> this.parsedata = parsedata )
      console.log('data==',this.parsedata);
   }


  
  showdata() {
  
  }
  ngOnInit() {
 
      this.showdata();
      this.getdata();
  }


booknow()
{
  
}
}
