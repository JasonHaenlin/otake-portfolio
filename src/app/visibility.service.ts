import { ElementRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { combineLatest, concat, defer, fromEvent, Observable, of } from 'rxjs';
import { distinctUntilChanged, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class VisibilityService {

  private pageVisible$: Observable<boolean>;

  constructor(@Inject(DOCUMENT) document: any) {
    this.pageVisible$ = concat(
      defer(() => of(!document.hidden)),
      fromEvent(document, 'visibilitychange')
        .pipe(
          map(e => !document.hidden)
        )
    );
  }

  elementInSight(element: ElementRef): Observable<boolean> {
    const elementVisible$ = Observable.create(observer => {
      const intersectionObserver = new IntersectionObserver(entries => {
        observer.next(entries);
      });
      intersectionObserver.observe(element.nativeElement);
      return () => { intersectionObserver.disconnect(); };
    })
      .pipe(
        mergeMap((entries: IntersectionObserverEntry[]) => entries),
        map((entry: IntersectionObserverEntry) => entry.isIntersecting),
        distinctUntilChanged()
      );

    const elementInSight$ = combineLatest([this.pageVisible$, elementVisible$]
    ).pipe(
      map(vs => vs.every(v => v === true)),
      distinctUntilChanged()
    );

    return elementInSight$;
  }
}
