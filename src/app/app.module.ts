import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigestoCnjComponent } from './digesto-cnj/digesto-cnj.component';

import { registerLocaleData } from '@angular/common';
import LOCALE_PT from '@angular/common/locales/pt';
import { BaseModule } from './base/base.module';

import { ReactiveFormsModule } from '@angular/forms';
import { DigestoCnjModule } from './digesto-cnj/digesto-cnj.module';

registerLocaleData(LOCALE_PT);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BaseModule,
    DigestoCnjModule,
  ],
  providers: [
    {
      useValue: 'pt-BR',
      provide: LOCALE_ID
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
