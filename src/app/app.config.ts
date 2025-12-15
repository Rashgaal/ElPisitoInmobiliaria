import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './core/interceptors/token-interceptor';
import { errorInterceptor } from './core/interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'enabled'})),
    provideHttpClient(withInterceptors([tokenInterceptor,errorInterceptor]))
  ]
};



// provideHttpClient() es imprescindible para poder inyectar HttpClient en los services
// Para que funcionen nuestros interceptores debemos declararlos en provideHttpClient tal y como vemos arriba en el codigo

// withInMemoryScrolling({scrollPositionRestoration: 'enabled'})
// Esto hace que al elegir un item de menu para navegar a otro contenido, este nuevo contenido se cargue en la posicion(scroll) inicial
// Pudiera darse el caso de estar navegando e una pagina usando el scroll (y por ejemplo estar en una posicion de scroll muy baja) y no 
// quiero que al cargar un nuevo contenido ( por ejemplo un link quede abajo en el scroll la pagina conserve el scroll) la  pagina conserve el 
// scroll obligandome a scrollear hacia arriba para empezar a anavegar por el nuevo contenido