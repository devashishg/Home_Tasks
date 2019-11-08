import { Component, OnInit } from '@angular/core';
import countries from '../../assets/file.json';

//C:\Users\Devashish_Gupta\Documents\Devashish\HomeTasks\src\app\feed-area\

@Component({
  selector: 'app-feed-area',
  templateUrl: './feed-area.component.html',
  styleUrls: ['./feed-area.component.css']
})
export class FeedAreaComponent implements OnInit {
  public TitlePage:String;
  public Data;

  
  constructor() { this.TitlePage  = 'Source Name';
    this.Data  = countries.array;
  }

  ngOnInit() {
    
  }

}

