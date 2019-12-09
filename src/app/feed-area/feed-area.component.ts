import { Component, OnInit } from '@angular/core';
// import countries from '../../assets/file.json';    Local file load
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component.js';
import { DataFetchService } from '../Service/DataFetch/data-fetch.service.js';
import { Key, errorObject, sourceList } from 'src/constants.js';
import { LoginServiceService } from '../Service/LoginService/login-service.service.js';
import { Observable, Observer } from 'rxjs';
import { Article } from '../Model/Article.js';


@Component({
  selector: 'app-feed-area',
  templateUrl: './feed-area.component.html',
  styleUrls: ['./feed-area.component.css']
})
export class FeedAreaComponent implements OnInit {
  public static MyArticles;
  public TitlePage: string;
  public Data: Array<Article>;
  public searchTerm: string;
  public filterTerm: string;
  public SourceSet: Set < string > ;
  public user: string;
  public userFlag: any;
  flag: boolean;



  constructor(
    private route: Router,
    private DataFetchServices: DataFetchService,
    private logInService: LoginServiceService) {
      this.TitlePage = 'TOP HEAD LINES';
      this.searchTerm = '';
      this.filterTerm = '';
      this.userFlag = history.state.data;
      // console.log(this.userFlag);
      // this.user = this.logInService.getUser();
  }

  ngOnInit() {

    this.user = this.logInService.getUser();
    this.flag = (this.user === 'Admin');
    this.setCreation();
    if (this.userFlag) {
      this.sourceLoad('My Articles');
    } else {
      this.load(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${ Key }`, 'Top Head Lines');
    }
  }


  load = (url: string, source: string) => {
    this.DataFetchServices.getNewsFeeds(url).subscribe((obj: any) => {
      // console.log(obj);
      this.setData(obj.articles.map((object: Article) => {
        // console.log(object);
        return object.description && object.publishedAt && object.title ? object : {
          author: `${object.author ? object.author : 'Error'}`,
          content: `${object.content ? object.content : 'Error'}`,
          description: `${object.description ? object.description : 'Server Error'}`,
          id: object.id,
          publishedAt: `${object.publishedAt ? object.publishedAt : 'Error'}`,
          source: {
            id: `${object.source.id ? object.source.id : 'Error'}`,
            name: `${object.source.name ? object.source.name : 'Error'}`
          },
          title: `${object.title ? object.title : 'Error'}`,
          url: `${object.url ? object.url : 'Error'}`,
          urlToImage: object.urlToImage ? object.urlToImage : 'assets/missingFile.png'
        };
      }), source);
    });
  }

  setData = (Data: Array<Article>, source: string) => {

      sessionStorage.setItem(source, JSON.stringify(Data));
      this.Data = Data;
  }

  sourceLoad = (source) => {

    // Custom observable
    // unnecessary but implemented
    // ------------------------
    const myObservable$ = new Observable((observer: Observer < string > ) => {
      observer.next(source.split('-').join(' ').toUpperCase());
    });

    myObservable$.subscribe(value => {
      this.TitlePage = value;
    });

    // --------------------------------

    if (source === 'My Articles') {
      if (!FeedAreaComponent.MyArticles) {
        FeedAreaComponent.MyArticles = [errorObject];
      }
      this.Data = FeedAreaComponent.MyArticles;
    } else if (!sessionStorage.getItem(source)) {
      this.load(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${Key}`, source);
    } else {
      this.Data = JSON.parse(sessionStorage.getItem(source));
    }
  }

  setCreation = () => {
    this.SourceSet = new Set < string > (sourceList);
    return this.SourceSet;
  }


  searchFeeds = (searchA) => {
    this.searchTerm = searchA.value.searchTerm;
  }

  search = (searchTerm, item) => {
    if (searchTerm === '' || item.description.includes(searchTerm) || item.title.includes(searchTerm)) {
      return true;
    } else {
      return false;
    }
  }

  navigate = () => {
    console.log('navigating');
    this.route.navigate(['/CreateFeed']);
  }
}




    // const myObservable = Observable.create((observer: Observ er < string > ) => {
    //   setTimeout(() => {
    //     observer.next('first package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('second package');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.error('error message');
    //   }, 5000);

    // });

    // myObservable.subscribe(
    //   (data: string) => {
    //     console.log(data);
    //   },
    //   (data: string) => {
    //     console.log(Error);
    //   },
    //   () => {
    //     console.log('completed');
    //   }
    // );
