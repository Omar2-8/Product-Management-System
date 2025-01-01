import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpInterceptorFn, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';  

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes), 
        provideHttpClient(),
        provideAnimationsAsync(), 
        providePrimeNG({
          theme: {
              preset: Aura,
              options: {
                darkModeSelector: 'true'
            }
          }
      })
    ]
};
 