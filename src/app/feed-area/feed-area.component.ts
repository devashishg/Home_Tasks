import { Component, OnInit } from '@angular/core';
import countries from '../../assets/file.json';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component.js';


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
  public sourceSet:Set<String>=new Set<String>();

  
  constructor(private route:Router) { this.TitlePage  = 'Source Name';
    this.Data  = countries.array;
    this.searchTerm="";
    this.filterTerm="";
    
  }

  ngOnInit() {
    HeaderComponent.HeaderButtonClick(localStorage.getItem('status'));   
    if(!localStorage.getItem('status') || localStorage.getItem('status')==='false'){
      this.route.navigate(['/login']);
      localStorage.setItem('status','false');
    }
    this.setCreation();
    //console.log( this.SourceSet);
  }
  
  setCreation(){
    this.Data.map((f)=>{this.sourceSet.add(f.Source);});
  }

  searchFeeds(searchA){
    //console.log(searchA);
      this.searchTerm = searchA.value.searchTerm;
  }

  search=(searchTerm,item)=>{
    if(searchTerm === ""){
      return true;
    }
    if(item.Description.includes(searchTerm)||item.title.includes(searchTerm)){
      return true;
    }else{
      return false;
    } 
  }

  filter=(item,filterTerm)=>{
    if(filterTerm === "" || filterTerm === 'All Sources' || item.Source === filterTerm){
      return true;
    }else{
      return false;
    }
    
  }

  setFilter=(term)=>{
    this.filterTerm = term; this.TitlePage = term;
    //console.log(term);console.log(this.filterTerm);
  }
  navigate=()=>{
    //console.log('navigating');
    this.route.navigate(['/CreateFeed']);
  }

  
}

