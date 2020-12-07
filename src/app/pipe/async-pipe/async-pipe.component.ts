import {Component} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent {

  phones = ['iPhone 7', 'LG G 5', 'Honor 9', 'Idol S4', 'Nexus 6P'];

  phone: Observable<string>;

  constructor() {
    this.showPhones();
  }

  showPhones(): void {
    this.phone = interval(500).pipe(map((i: number) => this.phones[i]));
  }

}
