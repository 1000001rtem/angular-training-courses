import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { StructureComponent } from './structure/structure.component';
import { AttributeComponent } from './attribute/attribute.component';
import {AppSharkDirective} from './structure/app-shark.directive';
import {WhileDirective} from './structure/while.directive';



@NgModule({
  declarations: [DirectiveComponent, StructureComponent, AttributeComponent, AppSharkDirective, WhileDirective],
  imports: [
    CommonModule
  ],
  exports: [DirectiveComponent]
})
export class DirectiveModule { }
