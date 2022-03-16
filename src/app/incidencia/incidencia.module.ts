import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

import { IncidenciaRoutingModule } from './incidencia-routing.module';
import { IncidenciaComponent } from './incidencia/incidencia.component';


@NgModule({
  declarations: [
    IncidenciaComponent
  ],
  imports: [
    CommonModule,
    IncidenciaRoutingModule,
    MatSortModule,
    MatCardModule
  ]
})
export class IncidenciaModule { }
