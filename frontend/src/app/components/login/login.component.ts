import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.styles.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: AuthService) {

  }
  loginData = {};
post() {
  this.apiService.userLogIn(this.loginData);
}
  ngOnInit() {
  }
}
