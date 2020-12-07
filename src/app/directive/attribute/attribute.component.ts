import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  public isVerdana = true;
  public isNavy = true;
  public isSegoe = true;
  public divClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy,
  };
  public pClasses = {segoePrintFont: this.isSegoe};
  public visibility = true;

  title = 'angular-lesson-two-part-two';
  pFontSize = '14px';
  pFontFamily = 'Segoe Print';
  pStyle = {
    'font-size': this.pFontSize,
    'font-family': this.pFontFamily
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.visibility = !this.visibility;
  }

  incPFontSize(): void {
    const index = this.pFontSize.indexOf('px');
    let oldSize = +this.pFontSize.substring(0, index);
    this.pFontSize = (oldSize + 1).toString() + 'px';
    console.log(this.pStyle);
  }
}
