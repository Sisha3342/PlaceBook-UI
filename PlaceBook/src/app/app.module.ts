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
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouteButtonComponent } from './sidebar/route-button/route-button.component';
import { UserCardComponent } from './sidebar/user-card/user-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './my-bookings/table/table.component';
import { ButtonAddBookingComponent } from './my-bookings/button-add-booking/button-add-booking.component';
import { StatisticsBoxComponent } from './my-bookings/statistics-box/statistics-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyBookingsComponent,
    BookComponent,
    EmployeesBookingsComponent,
    EmployeesComponent,
    MyMapsComponent,
    EditorComponent,
    NotFoundComponent,
    SidebarComponent,
    RouteButtonComponent,
    UserCardComponent,
    TableComponent,
    ButtonAddBookingComponent,
    StatisticsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
