import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NullValuePipe } from './null-value.pipe';



@NgModule({
  declarations: [NullValuePipe],
  imports: [
    CommonModule
  ],
  exports:[
    NullValuePipe
  ]
})
export class NullValuePipeModule { }