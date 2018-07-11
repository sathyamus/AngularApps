import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input('appUnless') set appUnless(condition : boolean) {
    if (!condition) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }
  constructor(private templateRef : TemplateRef<any>, private viewRef : ViewContainerRef) {
    console.log(this.templateRef);
  }

}
