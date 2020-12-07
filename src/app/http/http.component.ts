import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AppService} from './service/app.service';
import {LoadingService} from './service/loading.service';
const user = require('../../assets/user.json');

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {
  title = 'angular-lesson-five';
  userName = user.user.name;
  userAge = user.user.age;
  result: Subscription;
  postResult: Subscription;

  loading = 'Loading...';

  newUser = {};
  posts;
  postParams;

  constructor(
    private appService: AppService,
    public loadingService: LoadingService
  ) {
  }

  ngOnInit(): void {
    this.result = this.appService.getUser()
      .subscribe(result => this.newUser = result);

    this.postResult = this.appService.getGetPost('1', 'comments')
      .subscribe(result => this.posts = result);

    this.appService.postUser('Artem', 31)
      .subscribe(result => this.postParams = result);
  }

  ngOnDestroy(): void {
    if (!this.result) {
      return;
    }
    if (!this.posts) {
      return;
    }
    this.result.unsubscribe();
    this.postResult.unsubscribe();
  }
}
