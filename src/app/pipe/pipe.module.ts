import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe.component';
import { PipeJoinPipe } from './pipe-join.pipe';
import {AsyncPipeComponent} from './async-pipe/async-pipe.component';



@NgModule({
    declarations: [PipeComponent, PipeJoinPipe, AsyncPipeComponent],
    exports: [
        PipeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PipeModule { }
