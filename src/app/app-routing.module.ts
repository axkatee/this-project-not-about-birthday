import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CongratulationToastsComponent} from './pages/congratulation-toasts/congratulation-toasts.component';
import {MainComponent} from './pages/main/main.component';
import {SignupComponent} from './pages/signup/signup.component';

const routes: Routes = [
  {path: 'sign-up', component: SignupComponent},
  {path: 'main', component: MainComponent},
  {path: 'congratulation-toasts', component: CongratulationToastsComponent},
  {path: '', redirectTo: 'sign-up', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
