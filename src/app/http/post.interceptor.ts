import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingService} from './service/loading.service';
import {delay, finalize, map} from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class PostInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.show();
    const httpsReq = request.clone(
      {url: request.url.replace('http://', 'https://')}
    );

    return next.handle(httpsReq).pipe(
      delay(5000),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const body = _.mapKeys(event.body, (value, key) => _.snakeCase(key));
          return event.clone({body});
        }
        return event;
      }),
      finalize((): void => {
        this.loadingService.hide();
      })
    );
  }
}
