import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { heroPageComponent } from './pages/Hero/hero-page.component';
import { dragonBallPageComponent} from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: heroPageComponent
  },
  {
    path: 'dragonball',
    component: dragonBallPageComponent
  },
  {
    // Esto es para que  cualquier path que no sea uno definid redireccionara al path vacio.
    path: '**',
    redirectTo: ''
  }
];
