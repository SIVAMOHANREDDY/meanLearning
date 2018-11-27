import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
const angularMaterialModules = [MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule];
const customComponents = [AppComponent, RegisterComponent, LoginComponent];

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent}];


@NgModule({
  declarations: [
    customComponents
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpModule, angularMaterialModules, RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})


export class AppModule { }
