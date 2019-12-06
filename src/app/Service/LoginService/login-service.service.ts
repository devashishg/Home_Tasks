import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { jsonData } from '../../../constants';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  constructor() { 
    if (!localStorage.getItem('status') || localStorage.getItem('status') === 'false') {
      localStorage.setItem('status', 'false');
      this.setStatus(false);
    } else {
      this.setStatus(true);
    }
    if(localStorage.getItem('user')){
      this.setUser(localStorage.getItem('user'));
    }
    
  }

  getStatus(){
    return jsonData.status === 'LoggedOut' ? false : true;
  }

  setStatus( status : boolean ){
    jsonData.status = status ? 'LoggedIn' : 'LoggedOut';
    localStorage.setItem('status',(status ? 'true' : 'false'));
  }
  setUser(name : string){
    jsonData.user = name;
  }
  getUser(){
    return jsonData.user;
  }
}
