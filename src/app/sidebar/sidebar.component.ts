import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  /**
   * save the user information in the variables
   */
  name: string;
  lastName: string;
  imgBackground: string;
  urlImgUser: string;
  styleBackground: string;
  hiddeInfoUser: boolean = true;

  constructor() {
   
  }
  /**
   * show user info
   */
  showInfo() {
    this.hiddeInfoUser = !this.hiddeInfoUser
  }
  ngOnInit() {
  }

}
