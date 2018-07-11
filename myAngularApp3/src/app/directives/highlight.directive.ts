import { Input, Directive, ElementRef, HostListener, HostBinding } from '@angular/core'

@Directive({
    selector: '[apphighlight]'
})

export class HighlightDirective {

    @Input('myColor') myColor: string;
    @HostBinding('style.backgroundColor') bgColor: string;

    @HostListener('mouseleave') mouse_leave() {
        // alert("mouse_left");
        // this.elementRef.nativeElement.style.backgroundColor = "transparent";
        this.bgColor = "transparent";
    }

    // @HostListener('mouseenter') mouse_enter() {
    //     // alert("mouse_entered");
    //     this.elementRef.nativeElement.style.backgroundColor = "aqua";
    //  this.bgColor = "aqua";
    // }

    @HostListener('click') click_action() {
        // alert("click_action");
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
        this.bgColor = "aqua";
    }

    constructor(private elementRef: ElementRef) {
        console.log("App Highlight", this.elementRef.nativeElement);
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }

}