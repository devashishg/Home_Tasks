import { Component, OnInit } from '@angular/core';
import countries from '../../assets/file.json';
import  {AppComponent as  app}  from  '../../app/app.component'
import { Router } from '@angular/router';

//C:\Users\Devashish_Gupta\Documents\Devashish\HomeTasks\src\app\feed-area\

@Component({
  selector: 'app-feed-area',
  templateUrl: './feed-area.component.html',
  styleUrls: ['./feed-area.component.css']
})
export class FeedAreaComponent implements OnInit {
  public TitlePage:String;
  public Data;

  
  constructor(private route:Router) { this.TitlePage  = 'Source Name';
    this.Data  = countries.array;
  }

  ngOnInit() {console.log('hi!');
    
  if(!localStorage.getItem('status')){console.log('h1!');
    this.route.navigate(['/login']);localStorage.setItem('status','false');return;
  }else  if(localStorage.getItem('status') &&  localStorage.getItem('status')==='flase'){console.log('hi2');
      this.route.navigate(['/login']);
    }
  }
  
}

