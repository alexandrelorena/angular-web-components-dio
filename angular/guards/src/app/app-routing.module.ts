import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'sobre',
    component: SobreComponent
  },
  {
    path:'produtos',
    component: ProdutosComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
