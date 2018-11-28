import { AuthService } from './auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
@Injectable()
export class AuthInterseptorService implements HttpInterceptor {

// if we use HttpClient instead of http we need to use injector instead of injecting a service directly.
    constructor(private injector: Injector) {

}

    intercept(req, next) {
        const auth = this.injector.get(AuthService);
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + auth.token )
        });
        console.log(authRequest);
        return next.handle(authRequest);
    }
}