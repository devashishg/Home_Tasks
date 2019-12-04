import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginServiceService } from '../LoginService/login-service.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RestrictUser implements CanActivate{
  constructor(private Auth :  LoginServiceService , private route :Router) {  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.Auth.getUser()==='Admin'){
      return true;
    }
    this.route.navigate(['/NewsFeeds']);
    return false;
  }
}
