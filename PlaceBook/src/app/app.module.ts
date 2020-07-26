import { BookingDetailsModalComponent } from './booking-details-modal/booking-details-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Overlay } from '@angular/cdk/overlay';
import { LoginComponent } from './login/login.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookComponent } from './book/book.component';
import { EmployeesBookingsComponent } from './employees-bookings/employees-bookings.component';
import { EmployeesComponent } from './employees/employees.component';
import { MyMapsComponent } from './my-maps/my-maps.component';
import { EditorComponent } from './editor/editor.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouteButtonComponent } from './sidebar/route-button/route-button.component';
import { UserCardComponent } from './sidebar/user-card/user-card.component';
import { SearchComponent } from './search/search.component';
import { EmployeeCardComponent } from './employees/employee-card/employee-card.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeLayoutComponent } from './layouts/home/home-layout.component';
import { LoginLayoutComponent } from './layouts/login/login-layout.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { TableComponent } from './table/table.component';
import { StatisticsBoxComponent } from './my-bookings/statistics-box/statistics-box.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { RatePlaceModalComponent } from './my-bookings/rate-place-modal/rate-place-modal.component';
import { RateComponent } from './my-bookings/rate-place-modal/rate/rate.component';
import { EmployeesBookingsColumnService } from './employees-bookings/employees-bookings-column.service';
import { MyBookingsColumnService } from './my-bookings/my-bookings-column.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
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
    StatisticsBoxComponent,
    SearchComponent,
    EmployeeCardComponent,
    SnackBarComponent,
    BookingDetailsModalComponent,
    BookingStatusComponent,
    RatePlaceModalComponent,
    RateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  providers: [
    MatSnackBar,
    Overlay,
    AuthGuard,
    AuthService,
    EmployeesBookingsColumnService,
    MyBookingsColumnService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
