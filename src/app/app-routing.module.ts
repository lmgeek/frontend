import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'home', loadChildren: () => import('./layouts/layout1/layout1.module').then(m => m.Layout1Module) },
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
  { path: 'auth', loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule) },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  { path: 'typeupload', loadChildren: () => import('./pages/typeuploads/typeuploads.module').then(m => m.TypeUploadsModule) },
  { path: 'orders', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'myorders', loadChildren: () => import('./pages/myorder/myorder.module').then(m => m.MyorderModule) },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
