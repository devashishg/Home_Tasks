import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedAreaComponent } from '../feed-area/feed-area.component';
import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.css']
})
export class NewFeedComponent implements OnInit {
  public user: string;
  public userDummy: string;
  public submitted: boolean;

  constructor(private route: Router, public logInServices: LoginServiceService) {
    this.submitted = false;
  }

  ngOnInit() {
    if (!this.logInServices.getStatus()) {
      this.route.navigate(['/login']);
    }
    
    this.user = this.logInServices.getUser();
    this.userDummy = this.user;
  }

  submissionNewFeed = (obj) => {
    this.submitted = true;
    if ((FeedAreaComponent.MyArticles && FeedAreaComponent.MyArticles[0].author === 'Error') || !FeedAreaComponent.MyArticles) {
      FeedAreaComponent.MyArticles = new Array();
    }

    if (obj.form.status === "VALID") {
      window.alert(`Article Saved:

      ${JSON.stringify(obj.value)} `);
      FeedAreaComponent.MyArticles.push(obj.value);

      console.log(this.user);
      console.log(this.userDummy);
      console.log(this.logInServices.getUser());
      
      obj.reset();
      
      console.log(typeof(this.user));
     
      console.log(this.user);
      
      this.user = this.userDummy;
      console.log(this.user);
      console.log(this.userDummy);
      console.log(this.logInServices.getUser());
    
    } else {
      window.alert(`inValid Input`);
    }
  }

  navigateBack() {
    this.route.navigate(['/NewsFeeds']);
  }

}
