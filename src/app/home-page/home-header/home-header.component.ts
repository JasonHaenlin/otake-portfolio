import { Component, OnInit } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  public targetElement = null;

  public menu: boolean;

  constructor() { }

  ngOnInit() {
    this.menu = false;
    this.targetElement = document.body;
  }

  showMenu() {
    this.menu = true;
    disableBodyScroll(this.targetElement);
  }

  hideMenu() {
    this.menu = false;
    enableBodyScroll(this.targetElement);
  }
}
