import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private status = 'LoggedOut';
  public user : string = 'user';
  constructor() { }
  
  getStatus(){
    return this.status === 'LoggedOut' ? false :true;
  }

  setStatus( status : boolean ){
    this.status = status ? 'LoggedIn' : 'LoggedOut';
    localStorage.setItem('status',(status ? 'true' : 'false'));
  }
  setUser(name : string){
    this.user = name;
  }
  getUser(){
    return this.user;
  }
}
