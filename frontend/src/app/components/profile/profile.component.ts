import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.styles.css']
})
export class ProfileComponent implements OnInit {
 profile: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.apiService.getProfile(id).subscribe(data => {
      this.profile = data;
    });
  }
}
