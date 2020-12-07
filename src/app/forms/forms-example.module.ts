import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { UsualComponent } from './usual/usual.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';


@NgModule({
  declarations: [FormsComponent, UsualComponent, ReactiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormsComponent]
})
export class FormsExampleModule { }
