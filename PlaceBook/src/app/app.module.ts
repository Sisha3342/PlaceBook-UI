import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { LoginComponent } from './login/login.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookComponent } from './book/book.component';
import { EmployeesBookingsComponent } from './employees-bookings/employees-bookings.component';
import { EmployeesComponent } from './employees/employees.component';
import { MyMapsComponent } from './my-maps/my-maps.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyBookingsComponent,
    BookComponent,
    EmployeesBookingsComponent,
    EmployeesComponent,
    MyMapsComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
