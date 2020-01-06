import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './Service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  public  user:string;

  constructor(private route:Router, private logInServices : LoginServiceService) {
    if(localStorage.getItem('status')==='true'){
      logInServices.setStatus(true);
      logInServices.setUser(localStorage.getItem('user'));
    }
  }

  ngOnInit(){
    
  }
  
  title = 'HomeTasks';
}
