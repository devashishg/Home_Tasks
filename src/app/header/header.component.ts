import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public  BouttonText:string;
  public static ButtonElement ;
  constructor(private route:Router) {
  }
  
  ngOnInit() {
    HeaderComponent.ButtonElement = document.getElementsByTagName('button')[0];
    HeaderComponent.HeaderButtonClick(localStorage.getItem('status'));
    
  }

  static HeaderButtonClick(status:String){
    HeaderComponent.ButtonElement = document.getElementsByTagName('button')[0];
    if(status ==='true'){
      HeaderComponent.ButtonElement.style.visibility='visible';
      document.getElementsByTagName('button')[0].innerHTML="Logout";
    }else{
      HeaderComponent.ButtonElement.style.visibility='hidden';
    }
  }
  HeaderButtonClick(){
    localStorage.setItem('status','false');
    HeaderComponent.HeaderButtonClick('false');
    this.route.navigate(['/login']);
  }
}