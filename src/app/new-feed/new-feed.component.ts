import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedAreaComponent } from '../feed-area/feed-area.component';
import { LoginServiceService } from '../Service/login-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { stringify } from 'querystring';

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
      window.alert(`Article Saved !! `);
      console.log(`${JSON.stringify(obj.value)}`)
      FeedAreaComponent.MyArticles.push(obj.value);
      this.resetForm(obj);
    } else {
      window.alert(`inValid Input`);
    }
  }

  navigateBack() {
    this.route.navigate(['/NewsFeeds']);
  }

  resetForm = (obj)=>{
    obj.reset({
      'title': '',
      'Author' : this.user,
      'publishedAt': '',
      'ShortDesc': '',
      'url': '',
      'description': '',
      'urlToImage': '',
    });
  }

}