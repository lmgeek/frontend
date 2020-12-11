import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyorderRoutingModule } from './myorder-routing.module';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from 'src/app/views/forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SofboxModule } from 'src/app/components/sofbox/sofbox.module';



@NgModule({
  declarations: [
    ListComponent,
    ShowComponent,
    UpdateComponent
  ],
  imports: [
    MyorderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SofboxModule
  ],
  exports: [
    ListComponent
  ]
})
export class MyorderModule { }
