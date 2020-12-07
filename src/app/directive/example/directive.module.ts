import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { CashDirective } from './cash.directive';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ButtonDisablerDirective } from './button-disabler.directive';
import {TextMaskModule} from 'angular2-text-mask';
import {FormsModule} from '@angular/forms';
import { MaskDirective } from './mask.directive';



@NgModule({
  declarations: [DirectiveComponent, CashDirective, ButtonDisablerDirective, MaskDirective],
  exports: [DirectiveComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    TextMaskModule,
    FormsModule
  ]
})
export class DirectiveModule { }
