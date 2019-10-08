import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class GuardComponent implements CanActivate, CanActivateChild{

    allowed: boolean= false;
    
    constructor(private authservice: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean {
        
        this.authservice.isAuthenticated().then(
            (authenticated: boolean)=>{
                if(authenticated){
                    this.allowed = true;
                }
                else
                {
                    this.allowed = false;
                }
            }
        );

        if(this.allowed){
            return true;
        }
        else
        {
            this.router.navigate(['/']);
            return false;
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean {
       return this.canActivate(route, state);
    }
        
}