import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Ng1AppModule } from './ng1/ng1.app';
import { environment } from './environments/environment';
import './ng1/ng1.app';
import { UpgradeModule } from '@angular/upgrade/static';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then((platformRef) => {
      const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;

      upgrade.bootstrap(document.body, ['Ng1AppModule'], { strictDi: false });
    })
    .catch(err => console.error(err));
