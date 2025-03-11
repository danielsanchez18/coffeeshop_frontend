import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMainPageComponent } from './pages/main/main-page.component';
import { ClientHomePageComponent } from './pages/home/home-page.component';
import { ClientMenuPageComponent } from './pages/menu/menu-page.component';
import { ClientAboutPageComponent } from './pages/about/about-page.component';
import { ClientLoginPageComponent } from './pages/login/login-page.component';
import { ClientSignupPageComponent } from './pages/signup/signup-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientMainPageComponent,
    children: [
      { path: '', component: ClientHomePageComponent },
      { path: 'menu', component: ClientMenuPageComponent },
      { path: 'nosotros', component: ClientAboutPageComponent },
      { path: 'login', component: ClientLoginPageComponent },
      { path: 'signup', component: ClientSignupPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
