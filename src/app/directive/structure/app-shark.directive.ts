import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appShark]'
})
export class AppSharkDirective implements OnInit, OnChanges {
  @Input()
  set title(value: string) {
    console.log(value);
    this.text = value;
  }

  public creature = 'Дельфин'; // Это значение получим во внешнем компоненте
  private text: string;
  private fontWeight = 'normal';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementRef.nativeElement.style.fontWeight = 'bold';

    // const shark = this.renderer.createText(this.text);
    // renderer.appendChild(this.elementRef.nativeElement, shark);
    console.log('AppShark constructor');
  }

  @HostBinding('style.fontWeight')
  get getFontWeight(): string {
    return this.fontWeight;
  }

  ngOnInit(): void {
    console.log(this.creature + 'SharkDirective');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const shark = this.renderer.createText(this.text);
    const newElement = this.renderer.appendChild(this.elementRef.nativeElement, shark);
    this.renderer.appendChild(this.elementRef.nativeElement, shark);
    // this.renderer.insertBefore(this.elementRef.nativeElement, shark, newElement);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.fontWeight = 'normal';
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   for (let propName in changes) {
  //     let chng = changes[propName];
  //     let cur = JSON.stringify(chng.currentValue);
  //     let prev = JSON.stringify(chng.previousValue);
  //     this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  //   }
  // }
}
