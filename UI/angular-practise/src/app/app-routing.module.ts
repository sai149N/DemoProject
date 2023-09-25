import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Accounts/login/login.component';
import { DefaultLayoutComponent } from './Containers/default-layout/default-layout.component';

const routes: Routes = [
 
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
     
      {
        path: 'dash-board',
        loadChildren: () => import('./Home/home.module').then(m => m.HomeModule)
      },
      {
        path: '',
        redirectTo: 'dash-board',
        pathMatch: 'full'
      },]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
