import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './components/menu.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, HelloComponent, MenuComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
