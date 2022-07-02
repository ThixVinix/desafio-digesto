import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigestoCnjComponent } from './digesto-cnj.component';

const routes: Routes = [{ path: '', component: DigestoCnjComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigestoCnjRoutingModule { }