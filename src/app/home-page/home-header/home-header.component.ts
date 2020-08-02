import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const SCROLL_TIME = 100;

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  animations: [
    trigger('floatMovement', [
      state('base', style({ transform: 'translateY(0)' })),
      state('move', style({ transform: 'translateY(-30%)' })),
      transition('* <=> *', animate('1s linear'))
    ])
  ]
})
export class HomeHeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  private scrollSub: Subscription = new Subscription();

  public menu = false;
  public targetElement = null;
  public displayArrow = true;
  public state = 'base';

  public menuActive = false;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'move';
    }, 0);
  }

  onEnd(event) {
    this.state = 'base';
    if (event.toState === 'base') {
      setTimeout(() => {
        this.state = 'move';
      }, 0);
    }
  }

  moveDown() {
    let scrollOfSetY = 0;
    const interval = setInterval(() => {
      scrollOfSetY += 10;
      window.scroll(0, scrollOfSetY);
      if (window.pageYOffset >= document.body.offsetHeight) {
        clearInterval(interval);
      }
    }, 1);
  }

  ngOnInit() {
    this.targetElement = document.body;
    this.subToScrollEvent();
  }

  ngOnDestroy(): void {
    this.unsubScrollEvent();
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

  public toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
