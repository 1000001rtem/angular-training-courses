import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  param = '';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    console.log(this.router);
    // this.getParam();
    this.getParamSnapShot();
  }

  // Вариант c observable
  getParam(): void {
    this.activeRoute.params.subscribe(e => this.param = e['param']);
  }

  // Вариант со snapsot
  // Для отображения, нужно повторно проинициализировать компонент
  getParamSnapShot(): void {
    this.param = this.activeRoute.snapshot.params['param'];
    // this.reload();
  }

  reloadComponent = async () => {
    if (this.router.url === '/test/one') {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      const currentUrl = this.router.url + '?';
      this.router.navigateByUrl(currentUrl).then(() => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      });
    } else {
      await this.router.navigateByUrl('test/one');
    }
  };

}
