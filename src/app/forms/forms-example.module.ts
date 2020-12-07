import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { UsualComponent } from './usual/usual.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import {CurrencyPatternDirective} from './directive/currency-pattern.directive';
import {CustomAsyncValidatorDirective} from './directive/custom-async-validator.directive';


@NgModule({
  declarations: [FormsComponent, UsualComponent, ReactiveComponent, CurrencyPatternDirective, CustomAsyncValidatorDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormsComponent]
})
export class FormsExampleModule { }
