import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DependencyInjectionComponent} from './dependency-injection.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [DependencyInjectionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DependencyInjectionComponent]
})
export class DependencyInjectionModule {
}
