import { Routes } from '@angular/router';

import { CounterPageComponent } from './pages/counter/counter-page.components';
import { HeroPageComponenet } from './pages/hero/hero-page.component';
import { DragonballPageCmponent } from './pages/dragonball/dragonball-page.components';

export const routes: Routes = [
  {
    path:'',
    component: CounterPageComponent,
  },
  {
    path:'hero',
    component: HeroPageComponenet,
  },
  {
  path:'dragonball',
  component: DragonballPageCmponent,
},
  {
    path: '**',
    redirectTo:  ''
  }

];
