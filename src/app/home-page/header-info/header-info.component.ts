import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent implements OnInit {

  public notif = true;

  constructor() { }

  ngOnInit() {
  }

  updateShowNotif() {
    this.notif = !this.notif;
  }

}
