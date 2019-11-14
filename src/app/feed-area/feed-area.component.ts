import { Component, OnInit } from '@angular/core';
// import countries from '../../assets/file.json';    Local file load 
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component.js';
import { DataFetchService } from '../DataFetchService/data-fetch.service.js';
import { Key } from 'src/constants.js';


@Component({
  selector: 'app-feed-area',
  templateUrl: './feed-area.component.html',
  styleUrls: ['./feed-area.component.css']
})
export class FeedAreaComponent implements OnInit {
  public TitlePage:String;
  public Data;
  public searchTerm:String ;
  public filterTerm:String;
  public SourceSet:Set<String>;
  

  
  constructor(private route:Router, private DataFetchService : DataFetchService) {
    this.TitlePage  = 'Top Headlines';
    // this.Data  = countries.array;
    this.searchTerm="";
    this.filterTerm="";
    
  }

  ngOnInit() {
    HeaderComponent.HeaderButtonClick(localStorage.getItem('status'))   
    if(!localStorage.getItem('status') || localStorage.getItem('status')==='false'){
      this.route.navigate(['/login']);
      localStorage.setItem('status','false');
    }
    this.SetCreation();
    //console.log( this.SourceSet);
    
    this.load(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${ Key }`);
    
    
  }
  
load(url){

  this.DataFetchService.getNewsFeeds(url).subscribe((obj : any)=>{
      //console.log(obj.articles);
      this.Data = obj.articles.map((object)=>{return object.description && object.publishedAt && object.title ? object : 
        {
          author: `${object.author ? object.author :'Error'}`,
          content: `${object.content ? object.content :'Error'}`,
          description:  `${object.description ? object.description :'Server Error'}`,
          id: object.id ,
          publishedAt: `${object.publishedAt ? object.publishedAt :'Error'}`,
          source: {id: `${object.source.id ? object.source.id :'Error'}`, name: `${object.source.name ? object.source.name :'Error'}`},
          title: `${object.title ? object.title :'Error'}`,
          url: `${object.url ? object.url :'Error'}`,
          urlToImage: object.urlToImage ? object.urlToImage :'assets/missingFile.png'
        } 
      });      
    });
    //console.log(this.TitlePage);
}

  SetCreation(){
    this.SourceSet = new Set<String>(['the-times-of-india','time','the-new-york-times',
      'the-hindu','msnbc','google-news','cnn','bbc-news','bloomberg',
      'buzzfeed','engadget','espn','hacker-news', 'national-geographic',
      'techradar','the-verge','wired']);
    return this.SourceSet;
  }

  SearchFeeds(searchA){
      this.searchTerm = searchA.value.searchTerm;
  }

  search(searchTerm,item){
    if(searchTerm === ""){
      return true;
    }else{
      if(item.description.includes(searchTerm)){
        return true;
      }else if(item.title.includes(searchTerm)){
        return true;
      }else{
        return false;
      }
    }
  }


  SourceLoad(source){
    if(source === 'Top Head Lines' && this.TitlePage === 'Top Headlines'){}
    else{
      this.load(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${Key}`);
      this.TitlePage = source.split('-').join(' ').toUpperCase();
    }
  }

  navigate(){
    console.log('navigating');
    this.route.navigate(['/CreateFeed']);
  }

  
}

