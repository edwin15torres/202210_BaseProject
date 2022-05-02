import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 2. Importar file del cafes.module.ts
import { CafesModule } from './cafes/cafes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CafesModule // 2. clase del modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
