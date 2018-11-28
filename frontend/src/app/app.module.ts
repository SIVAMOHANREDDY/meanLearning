import { AuthInterseptorService } from './services/authInterseptor.service';
import { MessageComponent } from './components/message/message.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostMessageComponent } from './components/postmessage/postmessage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


const angularMaterialModules = [MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule, MatListModule];
const customComponents = [AppComponent,
  MessageComponent,
  RegisterComponent,
  LoginComponent,
  UsersComponent,
  ProfileComponent,
  PostMessageComponent];

const routes: Routes = [
  { path: '', component: PostMessageComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: ProfileComponent }];


@NgModule({
  declarations: [
    customComponents
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule, angularMaterialModules, RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterseptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})


export class AppModule { }
