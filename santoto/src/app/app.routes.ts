import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

// Importamos los componentes de cada sección
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { QuePublicamosComponent } from './pages/que-publicamos/que-publicamos.component';
import { NuestraOfertaComponent } from './pages/nuestra-oferta/nuestra-oferta.component';
import { EncontremonosComponent } from './pages/encontremonos/encontremonos.component';

export const routes: Routes = [
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'que-publicamos', component: QuePublicamosComponent },
  { path: 'nuestra-oferta', component: NuestraOfertaComponent },
  { path: 'encontremonos', component: EncontremonosComponent },
];

export const appRouter = provideRouter(routes);
