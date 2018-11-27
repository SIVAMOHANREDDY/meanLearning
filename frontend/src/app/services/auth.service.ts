import { Http } from '@angular/http'
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
    constructor(private http: Http) {

    }

    sedUserRegistration(registerData) {
        this.http.post('http://localhost:3000/register', registerData)
        .subscribe(res => {
        });
    }

    userLogIn(logInData){
        this.http.post('http://localhost:3000/login', logInData)
        .subscribe(res => {
            console.log(res);
        });
    }
}
