import './polyfills';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app.module';

platformBrowser().bootstrapModule(AppModule).then().catch();
