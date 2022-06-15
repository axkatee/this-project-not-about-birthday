import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ChatDialogComponent } from './components/chat-dialog/chat-dialog.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MainComponent } from './pages/main/main.component';
import { CongratulationToastsComponent } from './pages/congratulation-toasts/congratulation-toasts.component';
import {NgParticlesModule} from 'ng-particles';

@NgModule({
  declarations: [
    AppComponent,
    ChatDialogComponent,
    SignupComponent,
    MainComponent,
    CongratulationToastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
