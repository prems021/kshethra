import { Component,Inject, OnInit  } from '@angular/core';
import { AuthGuard } from './dashboard/auth.guard';
@Component({
  
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   

    constructor(private auth_guard:AuthGuard ) { }
logged: boolean = false;

 ngOnInit()  {
     this.checklog();
 }

checklog()
{
this.logged= this.auth_guard.canActivate();
}
}
// 7025410235