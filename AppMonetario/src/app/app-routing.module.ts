import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoRoutingModule } from './extrato/extrato-routing.module';

const routes: Routes = [{
  path: 'extrato',
  component: ExtratoRoutingModule,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
