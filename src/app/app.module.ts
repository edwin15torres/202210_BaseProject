import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 2. Importar file del cafes.module.ts
import { CafesModule } from './cafes/cafes.module';
// 11. Importar Http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CafesModule, // 2. clase del modulo
    HttpClientModule //11.1 --> 12. Boostrap ---> test
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
