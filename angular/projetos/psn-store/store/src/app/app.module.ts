import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPrincingComponent } from './components/card/card-princing/card-princing.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, CardComponent, MenuBarComponent, CardLabelComponent, CardPrincingComponent],
	imports: [BrowserModule, RouterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
