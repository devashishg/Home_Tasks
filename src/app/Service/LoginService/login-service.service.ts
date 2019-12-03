import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { Observable, Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  myObservable$ = new Observable((observer: Observer < string > ) => {
    observer.next(this.user);
  });

  private status = 'LoggedOut';
  private user : string = 'user';
  constructor() { 
    console.log('hello');
    if (!localStorage.getItem('status') || localStorage.getItem('status') === 'false') {
      localStorage.setItem('status', 'false');
      this.setStatus(false);
    } else {
      this.setStatus(true);
    }

    if(localStorage.getItem('user')){
      this.setUser(localStorage.getItem('user'));
      console.log(`------------------${this.getUser()}----------------`)
    }
    
  }

  getStatus(){
    return this.status === 'LoggedOut' ? false : true;
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
