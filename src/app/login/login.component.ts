import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Vauth:boolean;

  constructor(private route:Router) { 
    this.Vauth=false;
    
  }

  ngOnInit() {
    if(!localStorage.getItem('status')){console.log('hhello1!');
      localStorage.getItem('status')==='false';
    }else
    if(localStorage.getItem('status')==='true'){console.log('hello2!');
      this.route.navigate(['/NewsFeeds']);
    }
  }

  onSubmit(formData){
    //console.log(formData);
    if(formData.value.user==='debian' && formData.value.password.length>0){
      this.route.navigate(['/NewsFeeds']);
      localStorage.setItem('status','true');
      localStorage.setItem('user',formData.value.user);
    }
    else{this.Vauth=true;}
  }
}