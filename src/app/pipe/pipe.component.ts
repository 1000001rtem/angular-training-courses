import {Component} from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {PipeJoinPipe} from './pipe-join.pipe';
import {interval, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
  providers: [DatePipe, CurrencyPipe, PipeJoinPipe]
})
export class PipeComponent {

  myDate = new Date(1961, 3, 12);
  welcome: string = 'Hello World!';
  persentage: number = 0.14;
  pi: number = 3.1415;
  money: number = 23.45;

  arrayString = ['1', '2', '3'];

  phones = ['iPhone 7', 'LG G 5', 'Honor 9', 'Idol S4', 'Nexus 6P'];
  phone: Observable<string>;

  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private joinPipe: PipeJoinPipe
  ) {
    this.showPhones();
    this.currencyPipe.transform(this.money, 'RUB', 'symbol', '1.1-2');
  }

  get dateEx1(): string {
    return this.datePipe.transform(this.myDate, 'dd/MM/yyyy');
  }

  get arrayStrings(): string {
    return this.joinPipe.transform(this.arrayString, '|');
  }

  showPhones(): void {
    this.phone = interval(500).pipe(map((i: number) => this.phones[i]));
  }
}
