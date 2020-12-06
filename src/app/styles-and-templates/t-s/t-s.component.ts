import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-t-s',
  template: `
    <div class="myClass"></div>
  `,
  styles: [`
    div {
      width: 50px;
      height: 50px;
      background-color: aqua;
    }
  `]
})
export class TSComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
