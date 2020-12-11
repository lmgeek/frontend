import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SofboxModule} from '../../components/sofbox/sofbox.module';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { AlertModule } from 'ngx-bootstrap/alert';



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
    UsersRoutingModule,
    AlertModule.forRoot(),
    SofboxModule
  ],
  exports: [
    CreateComponent,
    ListComponent
  ]
})
export class UsersModule { }
