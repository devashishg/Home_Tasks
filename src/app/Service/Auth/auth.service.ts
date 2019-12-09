import { Injectable } from '@angular/core';
import { userList } from 'src/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
   }

  verifyUser(obj) {
     const userListUpdated =  userList.filter(a => a.user === obj.user).filter(b => b.password === obj.password);
     return userListUpdated.length === 0 ? {status : false, user: 'None'} : {status : true, user: obj.user} ;
  }
}
