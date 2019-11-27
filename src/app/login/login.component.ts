import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginServiceService } from '../Service/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Vauth: boolean;

  constructor(private route: Router, private logInService: LoginServiceService) {
    this.Vauth = false;
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
    if (formData.value.user === 'debian' && formData.value.password === 'rstuvw') {
      this.logInService.setStatus(true);
      this.logInService.setUser(formData.value.user);
      localStorage.setItem('status', 'true');
      localStorage.setItem('user', formData.value.user);
      this.route.navigate(['/NewsFeeds']);
    } else {
      this.Vauth = true;
    }
  }
}