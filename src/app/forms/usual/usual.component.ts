import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-usual',
  templateUrl: './usual.component.html',
  styleUrls: ['./usual.component.css']
})
export class UsualComponent implements AfterViewInit {
  title = 0;

  @ViewChild('directive')
  model;

  print = (
    value: string,
    nextValue: any,
    directive: any
  ) => {
    console.log(value);
    console.log(nextValue);
    console.log(directive);
  };

  ngAfterViewInit(): void {
    console.log(this.model);
  }

  click = (value: any) => {
    console.log(value);
  };

}
