import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.template.html',
  styleUrls: ['./register.styles.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: AuthService) {

  }
  registerData = {};
post() {
  this.apiService.sedUserRegistration(this.registerData);
}
  ngOnInit() {
  }
}
