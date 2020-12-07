import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ChildComponent} from './child/child.component';
import {LifecycleComponent} from './lifecycle.component';

@NgModule({
  declarations: [LifecycleComponent, ChildComponent],
  exports: [LifecycleComponent, ChildComponent],
  imports: [CommonModule],
})
export class LifecycleModule {
}
