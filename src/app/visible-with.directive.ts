import { Directive, TemplateRef, ViewContainerRef, Input, ElementRef, EmbeddedViewRef } from '@angular/core';
import { VisibilityService } from './visibility.service';
import { filter, take } from 'rxjs/operators';

@Directive({
  selector: '[appVisibleWith]'
})
export class VisibleWithDirective {

  private view: EmbeddedViewRef<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private visibilityService: VisibilityService) { }

  @Input()
  set appVisibleWith(element) {
    this.visibilityService
      .elementInSight(new ElementRef(element))
      .pipe(filter(v => v), take(1))
      .subscribe((visible: boolean) => {
        console.log(visible);

        // if (visible) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        // } else {
        // this.viewContainer.clear();
        // }
      });
  }

}
