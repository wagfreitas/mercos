import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent, children: [
      {path: '', loadChildren: () => import('./pages/login/login.module'). then(m=> m.LoginModule)},
      {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m=> m.LoginModule)},
      {path: 'registrar', loadChildren: () => import('./pages/registrar/registrar.module').then(m => m.RegistrarModule)},
      {path: 'produtos', loadChildren: () => import('./pages/produtos/produtos.module').then(m => m.ProdutosModule), canLoad: [AuthGuard]}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
