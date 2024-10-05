import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient()], // Adiciona o HttpClient sem interceptores
  bootstrap: [AppComponent],
})
export class AppModule {}
