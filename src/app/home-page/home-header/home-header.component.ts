import { Component, OnInit, OnDestroy } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const SCROLL_TIME = 100;

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
export class HomeHeaderComponent implements OnInit, OnDestroy {
  private scrollSub: Subscription = new Subscription();

  public menu = false;
  public targetElement = null;
  public displayArrow = true;

  constructor() { }

  ngOnInit() {
    this.targetElement = document.body;
    this.subToScrollEvent();
  }

  ngOnDestroy(): void {
    this.unsubScrollEvent();
  }


  showMenu() {
    this.menu = true;
    disableBodyScroll(this.targetElement);
  }

  hideMenu() {
    this.menu = false;
    enableBodyScroll(this.targetElement);
  }

  private subToScrollEvent() {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(SCROLL_TIME))
      .subscribe(() => {
        if (window.pageYOffset > (document.body.offsetHeight / 4)) {
          this.displayArrow = false;
        } else {
          this.displayArrow = true;
        }


      });
  }

  private unsubScrollEvent() {
    if (!this.scrollSub.closed) {
      this.scrollSub.unsubscribe();
    }
  }
}
