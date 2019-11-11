import { Component, OnInit } from '@angular/core';
import countries from '../../assets/file.json';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component.js';

//C:\Users\Devashish_Gupta\Documents\Devashish\HomeTasks\src\app\feed-area\

@Component({
  selector: 'app-feed-area',
  templateUrl: './feed-area.component.html',
  styleUrls: ['./feed-area.component.css']
})
export class FeedAreaComponent implements OnInit {
  public TitlePage:String;
  public Data;
  public searchTerm:String ;
  public filetrTerm:String;
  public SourceSet:Set<String>=new Set<String>();

  
  constructor(private route:Router) { this.TitlePage  = 'Source Name';
    this.Data  = countries.array;
    this.searchTerm="";
    this.filetrTerm="";
    
  }

  ngOnInit() {
    HeaderComponent.HeaderButtonClick(localStorage.getItem('status'))   
    if(!localStorage.getItem('status') || localStorage.getItem('status')==='false'){
      this.route.navigate(['/login']);
      localStorage.setItem('status','false');
    }
    this.SetCreation();
    console.log( this.SourceSet);
  }
  
  SetCreation(){
    this.Data.forEach(element => {//console.log( this.SourceSet);
      this.SourceSet.add(element.Source);
    });return this.SourceSet;
  }

  SearchFeeds(searchA){
    console.log(searchA);
      this.searchTerm = searchA.value.searchTerm;
  }

  search(searchTerm,item){
    if(searchTerm === ""){
      return true;
    }else{
      if(item.Description.includes(searchTerm)){
        return true;
      }else if(item.title.includes(searchTerm)){
        return true;
      }else{
        return false;
      }
    }
  }

  filter(item,filterTerm){
    return true;
  }


}

