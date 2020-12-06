import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-meeting',
  templateUrl: './first-meeting.component.html',
  styleUrls: ['./first-meeting.component.css']
})
export class FirstMeetingComponent implements OnInit {

  firstText = 'firstText';

  secondText = 'secondText';

  answer: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  setMyText(text: string): void {
    this.firstText = text;
  }

  printValues(): void {
    console.log(`First: ${this.firstText}`);
    console.log(`Second: ${this.secondText}`);
  }

  sum(value: string, value2: string): void {
    this.answer = +value + +value2;
  }
}
