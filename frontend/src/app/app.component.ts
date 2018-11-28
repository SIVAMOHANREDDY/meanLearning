import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private apiService: ApiService, private authService: AuthService) {

  }

  ngOnInit() {
  }
}
