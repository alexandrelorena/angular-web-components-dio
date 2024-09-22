import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent, // Adicione o AppComponent nas declarações
    CheckSampleComponent,
  ],
  imports: [
    BrowserModule, // Use BrowserModule para aplicações no navegador
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent], // Defina o componente inicial de bootstrap
})
export class AppModule {}
