import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component'
import { ContactoComponent } from './contacto/contacto.component'
import { ProductosComponent } from './productos/productos.component'

const routes: Routes = [
  { path: '', redirectTo: 'contacto', pathMatch: 'full'},
  { path: 'contacto', component: ContactoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'productos', component: ProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
