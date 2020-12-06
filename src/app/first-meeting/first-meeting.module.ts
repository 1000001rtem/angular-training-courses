import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstMeetingComponent} from './first-meeting.component';
import {NewOneComponent} from './new-one/new-one.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SecondComponent} from './second/second.component';


@NgModule({
  declarations: [FirstMeetingComponent, NewOneComponent, SecondComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [FirstMeetingComponent]
})
export class FirstMeetingModule {
}
