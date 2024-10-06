import { Component } from '@angular/core';
import { links } from '../../links';

@Component({
	selector: 'app-menu-bar',
	templateUrl: './menu-bar.component.html',
	styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent {
	menuLinks = links;
}
