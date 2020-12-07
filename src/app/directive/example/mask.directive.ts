import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[mask]'
})
export class MaskDirective {

  constructor(
    private elementRef: ElementRef
  ) {
  }

  @HostListener('mouseup')
  focus(): void {
    const pos = this.elementRef.nativeElement.value.indexOf('_');
    this.elementRef.nativeElement.setSelectionRange(pos, pos, 'none');
  }
}
