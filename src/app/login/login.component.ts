import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginServiceService } from '../Service/LoginService/login-service.service';
import { AuthService } from '../Service/Auth/auth.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public static obj: LoginServiceService;
  public flag: boolean;

  constructor(private route: Router, private logInService: LoginServiceService , private AuthS: AuthService) {
    this.flag = false;
    LoginComponent.obj = logInService;
  }

  ngOnInit() {
    if (this.logInService.getStatus()) {
      this.route.navigate(['/NewsFeeds']);
    }
  }


  onSubmit(formData) {
    const response =  this.AuthS.verifyUser(formData.value);
    if (response.status) {
      this.logInService.setStatus(true);
      this.logInService.setUser(response.user);
      // console.log(this.logInService.getUser());

      localStorage.setItem('status', 'true');
      localStorage.setItem('user', response.user);

      this.logInService.getUser() === 'Admin' ? this.route.navigate(['/SuperUser']) : this.route.navigate(['/NewsFeeds']);

      HeaderComponent.HeaderButtonClick(this.logInService.getStatus());
    } else {
      this.flag = true;
    }
  }
}
