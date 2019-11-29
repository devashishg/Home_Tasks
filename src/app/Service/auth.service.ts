import { Injectable } from '@angular/core';
import { userList } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  verifyUser(obj){
     let userListUpdated =  userList.filter(a => a.user === obj.user).filter(b => b.password === obj.password);
     return userListUpdated.length === 0 ? {status : false, user: 'None'} : {status : true, user: obj.user} ;
  }
}
