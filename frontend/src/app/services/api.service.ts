import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiService {
    messages = [];
    users = [];

    constructor(private http: HttpClient) {

    }
    getMessages(userId) {
        this.http.get<any>('http://localhost:3000/posts/' + userId)
            .subscribe(res => {
                this.messages = res;
            });
    }

    postMessages(message) {
        this.http.post('http://localhost:3000/post', message)
            .subscribe(res => {

            });
    }

    getUsers() {
        this.http.get<any>('http://localhost:3000/users')
            .subscribe(res => {
                this.users = res;
            });
    }

    getProfile(id) {
        return this.http.get('http://localhost:3000/profile/' + id);
    }
}
