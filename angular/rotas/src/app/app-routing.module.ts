import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

// Defina suas rotas aqui
const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  {
    path: 'portifolio',
    component: CardComponent,
    children: [
      { path: ':id', component: CardComponent, pathMatch: 'prefix' },
      { path: ':id/:token', component: CardComponent },
    ],
  },
  { path: '**', redirectTo: '' }, // rota curinga >> volta pra home.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
