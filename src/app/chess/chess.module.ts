import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChessComponent} from './chess.component';
import {BlackBoxComponent} from './black-box/black-box.component';
import {WhiteBoxComponent} from './white-box/white-box.component';


@NgModule({
  declarations: [ChessComponent, BlackBoxComponent, WhiteBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [ChessComponent]
})
export class ChessModule {
}
