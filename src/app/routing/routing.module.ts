import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoutingComponent} from './routing.component';
import {ErrorComponent} from './error/error.component';
import {RoutingAppModule} from './routing-app.module';


@NgModule({
  declarations: [RoutingComponent, ErrorComponent],
  imports: [
    CommonModule,
    RoutingAppModule
  ],
  exports: [RoutingComponent]
})
export class RoutingModule {
}
