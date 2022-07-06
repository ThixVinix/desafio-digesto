import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BottomNavbarComponent } from './componentes/bottom-navbar/bottom-navbar.component';
import { TemplateBaseComponent } from './template-base/template-base.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './componentes/loader/loader.component';
import { TopNavbarComponent } from './componentes/top-navbar/top-navbar.component';
import { AuthorizationInterceptor } from './interceptadores/authorization.interceptor';
import { LoaderInterceptor } from './interceptadores/loader.interceptor';


@NgModule({
  declarations: [
    TemplateBaseComponent,
    TopNavbarComponent,
    BottomNavbarComponent,
    LoaderComponent
  ],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  exports: [LoaderComponent],
})
export class BaseModule { }
