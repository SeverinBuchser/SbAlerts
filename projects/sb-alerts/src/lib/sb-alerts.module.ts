import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbAlertComponent } from './sb-alert.component';



@NgModule({
  declarations: [SbAlertComponent],
  imports: [
    CommonModule
  ],
  exports: [SbAlertComponent]
})
export class SbAlertsModule { }
