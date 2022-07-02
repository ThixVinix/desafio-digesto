import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateBaseComponent } from './base/template-base/template-base.component';

const routes: Routes = [
  { path: '', redirectTo: 'buscarCnj', pathMatch: 'full' },
  {
    path: 'buscarCnj',
    component: TemplateBaseComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'digesto-cnj' },
      {
        path: 'digesto-cnj',
        loadChildren: () =>
          import('./digesto-cnj/digesto-cnj.module').then(
            (children) => children.DigestoCnjModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
