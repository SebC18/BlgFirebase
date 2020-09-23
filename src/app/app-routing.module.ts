import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'appareils', component: AppareilViewComponent},
  {path: 'appareils/:id', component: SingleAppareilComponent},
  {path:'auth', component: AuthComponent},
  {path:'', component: AppareilViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
