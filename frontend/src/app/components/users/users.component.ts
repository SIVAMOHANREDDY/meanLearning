import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.template.html',
  styleUrls: ['./users.styles.css']
})
export class UsersComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
      this.apiService.getUsers();
}
}
