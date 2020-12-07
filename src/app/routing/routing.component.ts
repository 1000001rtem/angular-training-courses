import {Component, OnInit} from '@angular/core';
import {Router, Routes} from '@angular/router';
import {routes} from './routing-app.module';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(private router: Router) {
  }

  get routes(): Routes {
    return routes;
  }

  goTest1(): void {
    // this.router.navigate(['test', 'one']);
    this.router.navigateByUrl('/test/one/1');
  }

  goTest2(): void {
    this.router.navigate(['test', 'two']);
  }

  ngOnInit(): void {
  }

}
