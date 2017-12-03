import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { CanActivateChild } from "@angular/router/src/interfaces";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }

    constructor(private router: Router, private authService: AuthService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated()
            .then(
            (authenticated: boolean) => {
                if (authenticated) {
                    console.log("Authenticated")
                    return true;
                } else {
                    console.log("Not Authenticated")
                    this.router.navigate(['/']);
                }
            });
    }

}