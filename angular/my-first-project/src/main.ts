import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.then((ref) => {
		if ((window as any)['ngRef']) {
			((window as any)['ngRef']).destroy();
		}
		((window as any)['ngRef']) = ref;
	})
	.catch((err) => console.error(err));
