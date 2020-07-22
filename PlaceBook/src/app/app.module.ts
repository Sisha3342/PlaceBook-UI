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
import { SearchComponent } from './search/search.component';
import { EmployeeCardComponent } from './employees/employee-card/employee-card.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeLayoutComponent } from './layouts/home/home-layout.component';
import { LoginLayoutComponent } from './layouts/login/login-layout.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { TableComponent } from './my-bookings/table/table.component';
import { StatisticsBoxComponent } from './my-bookings/statistics-box/statistics-box.component';
import { MapEditorComponent } from './map-editor/map-editor.component';
import { GridsterModule } from 'angular-gridster2';
import { MapComponent } from './map-editor/map/map.component';
import { MapObjectComponent } from './map-editor/map-object/map-object.component';
import { ScopeToolComponent } from './map-editor/size-tools/scope-tool/scope-tool.component';
import { SizeToolComponent } from './map-editor/size-tools/size-tool/size-tool.component';
import { ActionToolsComponent } from './map-editor/action-tools/action-tools.component';

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
    ScopeToolComponent,
    SizeToolComponent,
    ActionToolsComponent,
    TableComponent,
    StatisticsBoxComponent,
    SearchComponent,
    EmployeeCardComponent,
    SnackBarComponent,
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
  ],
  providers: [MatSnackBar, Overlay, AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
