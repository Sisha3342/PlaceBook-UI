import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookComponent } from './book/book.component';
import { EmployeesBookingsComponent } from './employees-bookings/employees-bookings.component';
import { EmployeesComponent } from './employees/employees.component';
import { MyMapsComponent } from './my-maps/my-maps.component';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'my_bookings', component: MyBookingsComponent },
  { path: 'book', component: BookComponent },
  { path: 'employees_bookings', component: EmployeesBookingsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'my_maps', component: MyMapsComponent },
  { path: 'editor', component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
