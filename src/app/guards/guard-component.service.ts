import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class GuardComponent implements CanActivate{

    constructor(private authservice: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean {

        if(this.authservice.isAuthenticated()){
            return true;
        }
        else
        {
            this.router.navigate(['/']);
            return false;
        }
    }
        
}