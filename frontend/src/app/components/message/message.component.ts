import { OnInit, Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-message',
    template: `
    <div *ngFor="let message of apiService.messages">
    <mat-card>{{message.msg}}</mat-card>
    </div>
    `
})

export class MessageComponent implements OnInit {
    constructor(private apiService: ApiService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        const userId = this.route.snapshot.params.id;
       this.apiService.getMessages(userId);
    }
}
