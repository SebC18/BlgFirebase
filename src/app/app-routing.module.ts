import { UserListComponent } from './user-list/user-list.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { AuthGuard } from './services/auth-guard.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'auth',      component: AuthComponent},
  {path: '',          component: AuthComponent},
  {path: 'users',     component : UserListComponent},
  {path: 'appareils',     canActivate:[AuthGuard], component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate:[AuthGuard], component: SingleAppareilComponent},
  {path :'edit',          canActivate:[AuthGuard], component: EditAppareilComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
