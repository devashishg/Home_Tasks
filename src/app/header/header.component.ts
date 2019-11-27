import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public  BouttonText:string;
  public static ButtonElement ;
  constructor(private route:Router , private logInService : LoginServiceService) {
  }
  
  ngOnInit() {
    HeaderComponent.ButtonElement = document.getElementsByTagName('button')[0];
    if(localStorage.getItem('status')==='true'){
      this.logInService.setStatus(true);
    }

    HeaderComponent.HeaderButtonClick(this.logInService.getStatus());    
  }

  
  static HeaderButtonClick(status:boolean){
    HeaderComponent.ButtonElement = document.getElementsByTagName('button')[0];
    if(status){
      HeaderComponent.ButtonElement.style.visibility='visible';
      document.getElementsByTagName('button')[0].innerHTML="Logout";
    }else{
      HeaderComponent.ButtonElement.style.visibility='hidden';
    }
  }


  
  HeaderButtonClick(){
    this.logInService.setStatus(false);
    this.logInService.setUser('user');
    HeaderComponent.HeaderButtonClick(false);
    this.route.navigate(['/login']);
  }
}