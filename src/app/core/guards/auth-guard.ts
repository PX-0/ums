import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";


export const AuthGuard: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      if(!inject(AuthService).isUserLoggedIn()){
        inject(Router).navigate(['/login'])
        return false;
      }
      return true;
    };