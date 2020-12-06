import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'tu-s',
  templateUrl: './tu-s.component.html',
  styles: [`
    div {
      width: 50px;
      height: 50px;
      background-color: green;
    }
  `]
})
export class TuSComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
