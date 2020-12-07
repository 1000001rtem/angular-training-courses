import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [HttpComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HttpComponent]
})
export class HttpModule { }
