import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // exemplo de componente
import { ContentComponent } from './pages/content/content.component';

// Defina suas rotas aqui
const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota inicial
  { path: 'content/:id', component: ContentComponent }, // Exemplo de outra rota
  // { path: '**', redirectTo: '' } // Redireciona para home caso a rota não seja encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
