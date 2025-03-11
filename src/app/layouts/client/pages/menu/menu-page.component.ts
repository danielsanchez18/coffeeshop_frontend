import { Component } from '@angular/core';

@Component({
  selector: 'client-menu-page',
  templateUrl: './menu-page.component.html',
})
export class ClientMenuPageComponent {

  categories = [
    { id: 1, name: 'Desayunos' },
    { id: 2, name: 'Almuerzos' },
    { id: 3, name: 'Cenas' },
    { id: 4, name: 'Snacks' },
    { id: 5, name: 'Bebidas' },
    { id: 6, name: 'Postres' },
    { id: 7, name: 'Sandwiches' },
    { id: 8, name: 'Hamburguesas' },
    { id: 9, name: 'Ensaladas' },
  ]

}
