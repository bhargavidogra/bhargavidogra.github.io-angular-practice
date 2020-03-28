import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttributeisActive]'
})
export class AttributeisActiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this is example to set all styles in one go
    this.renderer.setAttribute(this.el.nativeElement, 'style', 'margin-bottom: 10px; border: solid 2px green');

    // this is example to set one style at a time
    // this.renderer.setStyle(this.el.nativeElement, 'border', 'solid 2px gray');

    // this is example to access element through ElementRef which is NOT RECOMMENDED
    //this.el.nativeElement.style.backgroundColor = 'red';
  }

}
