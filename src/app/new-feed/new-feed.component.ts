import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  submissionNewFeed=(obj)=>{
    this.submitted=true;
    console.log(obj);
    if(obj.form.status === "VALID"){
        window.alert(`Article Saved: ${JSON.stringify(obj.value)} `);
    }else{
      window.alert(`InValid Input`);
    }
  }


  navigateBack(){
    this.route.navigate(['/NewsFeeds']);
  }

}
