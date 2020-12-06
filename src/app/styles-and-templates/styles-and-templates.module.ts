import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TSComponent} from './t-s/t-s.component';
import {TuSuComponent} from './tu-su/tu-su.component';
import {TSuComponent} from './t-su/t-su.component';
import {TuSComponent} from './tu-s/tu-s.component';


@NgModule({
  declarations: [TuSuComponent, TSComponent, TuSComponent, TSuComponent],
  exports: [TuSuComponent, TSComponent, TuSComponent, TSuComponent],
  imports: [
    CommonModule
  ]
})
export class StylesAndTemplatesModule {
}
