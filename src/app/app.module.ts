import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstMeetingModule} from './first-meeting/first-meeting.module';
import {StylesAndTemplatesModule} from './styles-and-templates/styles-and-templates.module';
import {LifecycleModule} from './lifecycle/lifecycle.module';
import {DirectiveModule} from './directive/directive.module';
import {ChessModule} from './chess/chess.module';
import { DependencyInjectionModule } from './dependency-injection/dependency-injection.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstMeetingModule,
    StylesAndTemplatesModule,
    LifecycleModule,
    DirectiveModule,
    ChessModule,
    DependencyInjectionModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
