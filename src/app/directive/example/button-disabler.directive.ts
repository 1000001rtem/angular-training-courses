import {AfterContentChecked, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonDisabler]'
})
export class ButtonDisablerDirective implements AfterContentChecked {

  checkBox: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.checkBox = this.renderer.createElement('input');
    this.renderer.setAttribute(this.checkBox, 'type', 'checkbox');
    this.elementRef.nativeElement.disabled = false;
    this.renderer.appendChild(elementRef.nativeElement, this.checkBox);
  }

  ngAfterContentChecked(): void {
    this.elementRef.nativeElement.disabled = !this.checkBox.checked;
  }
}
