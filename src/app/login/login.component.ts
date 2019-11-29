import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginServiceService } from '../Service/login-service.service';
import { AuthService } from '../Service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public flag: boolean;

  constructor(private route: Router, private logInService: LoginServiceService , private AuthService : AuthService) {
    this.flag = false;
  }

  ngOnInit() {
    if (this.logInService.getStatus()) {
      this.route.navigate(['/NewsFeeds']);
    }
  }

  /**
   * Function called on submition of form
   * @param formData 
   */
  onSubmit(formData) {
    let response =  this.AuthService.verifyUser(formData.value);
    if (response.status) {
      this.logInService.setStatus(true);
      this.logInService.setUser(response.user);
      console.log(this.logInService.getUser());
      
      localStorage.setItem('status', 'true');
      localStorage.setItem('user', response.user);
      this.route.navigate(['/NewsFeeds']);
    } else {
      this.flag = true;
    }
  }
}