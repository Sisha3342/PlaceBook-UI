import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatTabsModule
  ],
})
export class AppMaterialModule {}
