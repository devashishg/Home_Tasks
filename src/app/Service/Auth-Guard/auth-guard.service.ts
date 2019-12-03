import { Injectable } from '@angular/core';
import { CanActivate,RouterStateSnapshot ,ActivatedRouteSnapshot, Router} from '@angular/router';
import { LoginServiceService } from '../LoginService/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  
  constructor(private Auth :  LoginServiceService , private route :Router) {
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.Auth.getStatus()){
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}
