import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
    TOKEN_KEY = 'token';

    constructor(private http: HttpClient) { }

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    sedUserRegistration(registerData) {
        this.http.post<any>('http://localhost:3000/register', registerData)
        .subscribe(res => {
            localStorage.setItem('token', res.token);
            console.log(res);
        });
    }

    userLogIn(logInData){
        this.http.post<any>('http://localhost:3000/login', logInData)
        .subscribe(res => {
            localStorage.setItem('token', res.token);
            console.log(res);
        });
    }
}
