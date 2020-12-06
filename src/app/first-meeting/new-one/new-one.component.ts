import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent {

  @Input()
  inputText = 'superText';

  constructor() {
  }

}
