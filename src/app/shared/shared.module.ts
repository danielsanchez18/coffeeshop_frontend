import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarAdminComponent } from './components/navbars/navbar-admin/navbar-admin.component';
import { NavbarClientComponent } from './components/navbars/navbar-client/navbar-client.component';
import { Bell, ChevronDown, ConciergeBell, LogOut, LucideAngularModule, Menu, MessageCircle, ShoppingBag, UserRound, X, LogIn, Store, Coffee, House, Plus } from 'lucide-angular';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreCardComponent } from './components/store-card/store-card.component';


@NgModule({
  declarations: [
    NavbarAdminComponent,
    NavbarClientComponent,
    SocialMediaComponent,
    ProductCardComponent,
    FooterComponent,
    StoreCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule.pick({Menu, X, ChevronDown, Bell, MessageCircle, ShoppingBag, UserRound, ConciergeBell, LogOut, LogIn, Store, Coffee, House, Plus})
  ],
  exports: [
    NavbarAdminComponent,
    NavbarClientComponent,
    SocialMediaComponent,
    ProductCardComponent,
    FooterComponent,
    StoreCardComponent
  ]
})
export class SharedModule { }
