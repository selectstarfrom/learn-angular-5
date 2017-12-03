import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

export class AuthService {

    loggedIn: boolean = false;

    isAuthenticated() {

        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    console.log("Value:" + this.loggedIn)
                    resolve(this.loggedIn);
                }, 800);
            });

        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}