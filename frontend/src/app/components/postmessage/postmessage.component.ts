import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-message',
  templateUrl: './postmessage.template.html',
  styleUrls: ['./postmessage.styles.css']
})
export class PostMessageComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }
postMsg = '';

  ngOnInit() {
  }
  post() {
      this.apiService.postMessages({msg: this.postMsg});
  }
}
