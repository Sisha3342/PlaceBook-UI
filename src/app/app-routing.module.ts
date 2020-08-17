import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { BookComponent } from './pages/book/book.component';
import { EmployeesBookingsComponent } from './pages/employees-bookings/employees-bookings.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { MyMapsComponent } from './pages/my-maps/my-maps.component';
import { EditorComponent } from './pages/editor/editor.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeLayoutComponent } from './components/layouts/home/home-layout.component';
import { LoginLayoutComponent } from './components/layouts/login/login-layout.component';
import { AuthGuard } from './services/auth/auth.guard';
import { RoleGuard } from './services/roleGuards/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/my_bookings', pathMatch: 'full' },
      { path: 'my_bookings', component: MyBookingsComponent },
      { path: 'book', component: BookComponent },
      {
        path: 'employees_bookings',
        component: EmployeesBookingsComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        canActivate: [RoleGuard],
      },
      { path: 'my_maps', component: MyMapsComponent, canActivate: [RoleGuard] },
      {
        path: 'editor',
        component: EditorComponent,
        canActivate: [RoleGuard],
      },
    ],
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
