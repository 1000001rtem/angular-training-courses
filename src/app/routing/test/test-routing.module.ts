import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';

const routes: Routes = [
  {
    path: 'one/:param',
    component: OneComponent,
    loadChildren: () => import('./one/one.module').then(m => m.OneModule)
  },
  {
    path: 'two',
    component: TwoComponent,
    loadChildren: () => import('./two/two.module').then(m => m.TwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {
}
