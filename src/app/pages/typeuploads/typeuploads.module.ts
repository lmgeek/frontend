import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { TypeUploadsRoutingModule } from './typeuploads-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SofboxModule} from '../../components/sofbox/sofbox.module';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    ShowComponent,
    UpdateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TypeUploadsRoutingModule,
    SofboxModule
  ],
  exports: [
    CreateComponent,
    ListComponent
  ]
})
export class TypeUploadsModule { }
