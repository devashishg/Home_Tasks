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
  public user: String;
  public submitted: boolean;
  constructor(private route: Router, private logInServices: LoginServiceService) {
    this.submitted = false;
    this.user = logInServices.getUser();;
  }


  ngOnInit() {
    if (!this.logInServices.getStatus()) {
      this.route.navigate(['/login']);
    }
  }

  submissionNewFeed = (obj) => {
    console.log(obj);
    this.submitted = true;
    if ((FeedAreaComponent.MyArticles && FeedAreaComponent.MyArticles[0].author === 'Error') || !FeedAreaComponent.MyArticles) {
      FeedAreaComponent.MyArticles = new Array();
    }

    if (obj.form.status === "VALID") {
      window.alert(`Article Saved:

      ${JSON.stringify(obj.value)} `);
      FeedAreaComponent.MyArticles.push(obj.value);
    } else {
      window.alert(`InValid Input`);
    }
  }

  navigateBack() {
    this.route.navigate(['/NewsFeeds']);
  }

}
