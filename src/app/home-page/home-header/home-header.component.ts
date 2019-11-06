import { Component, OnInit } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
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
