import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NS_STATIONS_ENDPOINT, OCP_APIM_SUBSCRIPTION_KEY } from './environments/.environment';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: NS_STATIONS_ENDPOINT,
      useValue: NS_STATIONS_ENDPOINT,
    },
    {
      provide: OCP_APIM_SUBSCRIPTION_KEY,
      useValue: OCP_APIM_SUBSCRIPTION_KEY,
    },
    provideNativeDateAdapter()
  ]
};
