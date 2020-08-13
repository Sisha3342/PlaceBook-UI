import { BookingDetailsModalComponent } from './booking-details-modal/booking-details-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
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
import { SearchComponent } from './employees/search/search.component';
import { EmployeeCardComponent } from './employees/employee-card/employee-card.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HomeLayoutComponent } from './layouts/home/home-layout.component';
import { LoginLayoutComponent } from './layouts/login/login-layout.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { TableComponent } from './table/table.component';
import { StatisticsBoxComponent } from './my-bookings/statistics-box/statistics-box.component';
import { MapEditorComponent } from './map-editor/map-editor.component';
import { GridsterModule } from 'angular-gridster2';
import { MapComponent } from './map-editor/map/map.component';
import { MapObjectComponent } from './map-editor/map-tools/map-object/map-object.component';
import { ZoomToolComponent } from './map-editor/map-tools/zoom-tool/zoom-tool.component';
import { MapSizeToolComponent } from './map-editor/map-tools/map-size-tool/map-size-tool.component';
import { ActionToolsComponent } from './map-editor/action-tools/action-tools.component';
import { FloorPanelComponent } from './map-editor/floor-panel/floor-panel.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { RatePlaceModalComponent } from './my-bookings/rate-place-modal/rate-place-modal.component';
import { RateComponent } from './my-bookings/rate-place-modal/rate/rate.component';
import { EmployeesBookingsColumnService } from './employees-bookings/employees-bookings-column.service';
import { MyBookingsColumnService } from './my-bookings/my-bookings-column.service';
import { MyMapsColumnService } from './my-maps/my-maps-column.service';
import { MapsSearchComponent } from './maps-search/maps-search.component';
import { UserPhotoComponent } from './user-photo/user-photo.component';
import { PlaceInfoComponent } from './book/place-info/place-info.component';
import { MapBookingComponent } from './map-booking/map-booking.component';
import { RatingComponent } from './rating/rating.component';
import { DateRangeComponent } from './book/date-range/date-range.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { EditMapAddressComponent } from './my-maps/map-address-modal/map-address-modal.component';
import { RestoreDialogComponent } from './map-editor/restore-dialog/restore-dialog.component';
import { CancelBookingModalComponent } from './my-bookings/cancel-booking-modal/cancel-booking-modal.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DeleteOfficeAddressComponent } from './my-maps/delete-office-address/delete-office-address.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { MatSortModule } from '@angular/material/sort';

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
  ],
  providers: [
    Overlay,
    AuthGuard,
    AuthService,
    EmployeesBookingsColumnService,
    MyBookingsColumnService,
    MyMapsColumnService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
