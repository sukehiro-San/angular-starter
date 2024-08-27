import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AppService } from "./app.service";



@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {
    constructor(private appService: AppService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        if (this.appService.loggedIn) {
            return true;
        } else {
            this.router.navigate(['/test']);
            return false;
        }
    }
}