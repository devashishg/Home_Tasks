import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedAreaComponent } from '../feed-area/feed-area.component';

@Component({
  selector: 'app-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.css']
})
export class NewFeedComponent implements OnInit {
  public user:String;
  public submitted:boolean;
  constructor(private route:Router) { 
    this.submitted=false;
    this.user = localStorage.getItem('user');
  }
  

  ngOnInit() {
    if(!localStorage.getItem('status')){
      this.route.navigate(['/login']);localStorage.setItem('status','false');
    }
    else if(localStorage.getItem('status')==='false'){
      this.route.navigate(['/login']);
    }
  }

  SubmissionNewFeed(obj) {
    this.submitted = true;
    if ((FeedAreaComponent.MyArticles && FeedAreaComponent.MyArticles[0].author === 'Error') || !FeedAreaComponent.MyArticles) {
      FeedAreaComponent.MyArticles = new Array();
    } 
    FeedAreaComponent.MyArticles.push(obj.value);
    if (obj.form.status === "VALID") {
      window.alert(`Article Saved: ${JSON.stringify(obj.value)} `);
    } else {
      window.alert(`InValid Input`);
    }
  }


  navigateBack(){
    this.route.navigate(['/NewsFeeds']);
  }

}
