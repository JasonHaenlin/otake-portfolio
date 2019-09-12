import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';

const SCROLL_TIME = 50;

@Component({
  selector: 'app-home-timeline',
  templateUrl: './home-timeline.component.html',
  styleUrls: ['./home-timeline.component.scss']
})
export class HomeTimelineComponent implements OnInit, OnDestroy {

  private scrollSub: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subToScrollEvent();
  }

  ngOnDestroy(): void {
    this.unsubScrollEvent();
  }


  private updateScrollPosition(): void {
    console.log(document.body.offsetHeight + ' ' + window.scrollY + ' ' + document.body.scrollHeight);

  }

  private subToScrollEvent() {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(SCROLL_TIME))
      .subscribe(() => this.updateScrollPosition());
  }

  private unsubScrollEvent() {
    if (!this.scrollSub.closed) {
      this.scrollSub.unsubscribe();
    }
  }


}
