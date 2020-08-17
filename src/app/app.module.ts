import { BookingDetailsModalComponent } from './components/booking-details-modal/booking-details-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { LoginComponent } from './pages/login/login.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { BookComponent } from './pages/book/book.component';
import { EmployeesBookingsComponent } from './pages/employees-bookings/employees-bookings.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { MyMapsComponent } from './pages/my-maps/my-maps.component';
import { EditorComponent } from './pages/editor/editor.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouteButtonComponent } from './components/sidebar/route-button/route-button.component';
import { UserCardComponent } from './components/sidebar/user-card/user-card.component';
import { SearchComponent } from './pages/employees/search/search.component';
import { EmployeeCardComponent } from './pages/employees/employee-card/employee-card.component';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { HomeLayoutComponent } from './components/layouts/home/home-layout.component';
import { LoginLayoutComponent } from './components/layouts/login/login-layout.component';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { TableComponent } from './components/table/table.component';
import { StatisticsBoxComponent } from './pages/my-bookings/statistics-box/statistics-box.component';
import { MapEditorComponent } from './components/map-editor/map-editor.component';
import { GridsterModule } from 'angular-gridster2';
import { MapComponent } from './components/map-editor/map/map.component';
import { MapObjectComponent } from './components/map-editor/map-tools/map-object/map-object.component';
import { ZoomToolComponent } from './components/map-editor/map-tools/zoom-tool/zoom-tool.component';
import { MapSizeToolComponent } from './components/map-editor/map-tools/map-size-tool/map-size-tool.component';
import { ActionToolsComponent } from './components/map-editor/action-tools/action-tools.component';
import { FloorPanelComponent } from './components/map-editor/floor-panel/floor-panel.component';
import { BookingStatusComponent } from './components/booking-status/booking-status.component';
import { RatePlaceModalComponent } from './pages/my-bookings/rate-place-modal/rate-place-modal.component';
import { RateComponent } from './pages/my-bookings/rate-place-modal/rate/rate.component';
import { EmployeesBookingsColumnService } from './pages/employees-bookings/employees-bookings-column.service';
import { MyBookingsColumnService } from './pages/my-bookings/my-bookings-column.service';
import { MyMapsColumnService } from './pages/my-maps/my-maps-column.service';
import { MapsSearchComponent } from './components/maps-search/maps-search.component';
import { UserPhotoComponent } from './components/user-photo/user-photo.component';
import { PlaceInfoComponent } from './pages/book/place-info/place-info.component';
import { MapBookingComponent } from './components/map-booking/map-booking.component';
import { RatingComponent } from './components/rating/rating.component';
import { DateRangeComponent } from './pages/book/date-range/date-range.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { EditMapAddressComponent } from './pages/my-maps/map-address-modal/map-address-modal.component';
import { RestoreDialogComponent } from './components/map-editor/restore-dialog/restore-dialog.component';
import { CancelBookingModalComponent } from './pages/my-bookings/cancel-booking-modal/cancel-booking-modal.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DeleteOfficeAddressComponent } from './pages/my-maps/delete-office-address/delete-office-address.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { MatSortModule } from '@angular/material/sort';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { BookTimerComponent } from './pages/book/book-timer/book-timer.component';
import { MatChipsModule } from '@angular/material/chips';

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
    MapEditorComponent,
    MapComponent,
    MapObjectComponent,
    ZoomToolComponent,
    MapSizeToolComponent,
    ActionToolsComponent,
    TableComponent,
    StatisticsBoxComponent,
    SearchComponent,
    EmployeeCardComponent,
    BookingDetailsModalComponent,
    BookingStatusComponent,
    RatePlaceModalComponent,
    RateComponent,
    MapsSearchComponent,
    FloorPanelComponent,
    UserPhotoComponent,
    PlaceInfoComponent,
    MapBookingComponent,
    RatingComponent,
    DateRangeComponent,
    SpinnerComponent,
    EditMapAddressComponent,
    DeleteOfficeAddressComponent,
    RestoreDialogComponent,
    CancelBookingModalComponent,
    BookTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    GridsterModule,
    OverlayModule,
    NgxSpinnerModule,
    MatSortModule,
    MatChipsModule,
  ],
  providers: [
    Overlay,
    AuthGuard,
    AuthService,
    EmployeesBookingsColumnService,
    MyBookingsColumnService,
    MyMapsColumnService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
