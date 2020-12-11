import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [

  {
    path: 'show/:id',
    component: ShowComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyorderRoutingModule { }
