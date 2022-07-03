import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './componentes/top-navbar/top-navbar.component';
import { BottomNavbarComponent } from './componentes/bottom-navbar/bottom-navbar.component';
import { TemplateBaseComponent } from './template-base/template-base.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateBaseComponent,
    TopNavbarComponent,
    BottomNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class BaseModule { }
