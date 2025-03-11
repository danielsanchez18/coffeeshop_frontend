import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientMainPageComponent } from './pages/main/main-page.component';
import { ClientHomePageComponent } from './pages/home/home-page.component';
import { ClientAboutPageComponent } from './pages/about/about-page.component';
import { ClientMenuPageComponent } from './pages/menu/menu-page.component';
import { ClientSignupPageComponent } from './pages/signup/signup-page.component';
import { ClientLoginPageComponent } from './pages/login/login-page.component';
import { SharedModule } from '../../shared/shared.module';
import { Facebook, Instagram, LucideAngularModule, Phone } from 'lucide-angular';


@NgModule({
  declarations: [
    ClientMainPageComponent,
    ClientHomePageComponent,
    ClientAboutPageComponent,
    ClientMenuPageComponent,
    ClientSignupPageComponent,
    ClientLoginPageComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
        LucideAngularModule.pick({Facebook, Instagram, Phone})
  ]
})
export class ClientModule { }
