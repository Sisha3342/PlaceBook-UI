import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookComponent } from './book/book.component';
import { EmployeesBookingsComponent } from './employees-bookings/employees-bookings.component';
import { EmployeesComponent } from './employees/employees.component';
import { MyMapsComponent } from './my-maps/my-maps.component';
import { EditorComponent } from './editor/editor.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeLayoutComponent } from './layouts/home/home-layout.component';
import { LoginLayoutComponent } from './layouts/login/login-layout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/my_bookings', pathMatch: 'full'},
      { path: 'my_bookings', component: MyBookingsComponent },
      { path: 'book', component: BookComponent },
      { path: 'employees_bookings', component: EmployeesBookingsComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'my_maps', component: MyMapsComponent },
      { path: 'editor', component: EditorComponent },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
