import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[cash]',
  exportAs: 'cash'
})
export class CashDirective {

  localStorage = window.localStorage;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('keydown.enter')
  enter(): void {
    const names: string[] = JSON.parse(this.localStorage.getItem('names')) ?? [];
    names.push(this.elementRef.nativeElement.value);
    this.localStorage.setItem('names', JSON.stringify(names));
  }

  getNames(): string[] {
    return JSON.parse(this.localStorage.getItem('names'));
  }
}
