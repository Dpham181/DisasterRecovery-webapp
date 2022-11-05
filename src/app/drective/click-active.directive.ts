import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickActive]'
})
export class ClickActiveDirective {

  constructor(private el: ElementRef) {
 }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#7FFFD4');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
