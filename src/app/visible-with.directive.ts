import { Directive, ElementRef, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { VisibilityService } from './visibility.service';

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
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
  }

}
