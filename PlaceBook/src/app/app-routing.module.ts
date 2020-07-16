import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookComponent } from './book/book.component';
import { EmployeesBookingsComponent } from './employees-bookings/employees-bookings.component';
import { EmployeesComponent } from './employees/employees.component';
import { MyMapsComponent } from './my-maps/my-maps.component';
import { EditorComponent } from './editor/editor.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/my_bookings', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'my_bookings', component: MyBookingsComponent },
  { path: 'bookings', component: BookComponent },
  { path: 'employees_bookings', component: EmployeesBookingsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'my_maps', component: MyMapsComponent },
  { path: 'editor', component: EditorComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
