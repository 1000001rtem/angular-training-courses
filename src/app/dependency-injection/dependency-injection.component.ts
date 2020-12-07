import {Component, Inject, OnInit, Optional, SkipSelf} from '@angular/core';
import {DataService} from './service/data.service';
import {TestService} from './service/test.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'],
  providers: [
    {
      provide: 'data1',
      useClass: DataService
    },
    {
      provide: 'data2',
      useClass: DataService
    }
  ]
})
export class DependencyInjectionComponent implements OnInit {

  name: string;

  constructor(
    @Inject('data1') private dataService1: DataService,
    @SkipSelf() @Optional() testService: TestService,
    @Inject('data2') private dataService2: DataService
  ) {
    if (testService === null) {
      console.log(testService);
    }
  }

  addItem(name: string): void {
    this.dataService1.addData(name);
  }

  get items(): Array<string> {
    return this.dataService1.getItems();
  }

  addItem2(name: string): void {
    this.dataService2.addData(name);
  }

  get items2(): Array<string> {
    return this.dataService2.getItems();
  }

  ngOnInit(): void {
  }

}
