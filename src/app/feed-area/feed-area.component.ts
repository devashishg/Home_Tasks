import { Component, OnInit } from '@angular/core';
// import countries from '../../assets/file.json';    Local file load 
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component.js';
import { DataFetchService } from '../Service/data-fetch.service.js';
import { Key, errorObject, sourceList } from 'src/constants.js';
import { LoginServiceService } from '../Service/login-service.service.js';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-feed-area',
  templateUrl: './feed-area.component.html',
  styleUrls: ['./feed-area.component.css']
})
export class FeedAreaComponent implements OnInit {
  public TitlePage: String;
  public Data;
  public searchTerm: String;
  public filterTerm: String;
  public SourceSet: Set < String > ;
  public static HeadLines;
  public static FirstLoad: boolean = true;
  public static MyArticles;



  constructor(private route: Router, private DataFetchService: DataFetchService, private logInService: LoginServiceService) {
    this.TitlePage = 'TOP HEAD LINES';
    this.searchTerm = "";
    this.filterTerm = "";
  }

  ngOnInit() {
    if (!localStorage.getItem('status') || localStorage.getItem('status') === 'false') {
      localStorage.setItem('status', 'false');
      this.logInService.setStatus(false);
    } else {
      this.logInService.setStatus(true);
      HeaderComponent.HeaderButtonClick(true);
    }
    //console.log(this.logInService.getStatus());

    if (!this.logInService.getStatus()) {
      this.route.navigate(['/login']);
    }
    this.setCreation();
    this.load(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${ Key }`);
  }


  load = (url: string) => {
    this.DataFetchService.getNewsFeeds(url).subscribe((obj: any) => {
      this.setData(obj.articles.map((object) => {
        return object.description && object.publishedAt && object.title ? object : {
          author: `${object.author ? object.author :'Error'}`,
          content: `${object.content ? object.content :'Error'}`,
          description: `${object.description ? object.description :'Server Error'}`,
          id: object.id,
          publishedAt: `${object.publishedAt ? object.publishedAt :'Error'}`,
          source: {
            id: `${object.source.id ? object.source.id :'Error'}`,
            name: `${object.source.name ? object.source.name :'Error'}`
          },
          title: `${object.title ? object.title :'Error'}`,
          url: `${object.url ? object.url :'Error'}`,
          urlToImage: object.urlToImage ? object.urlToImage : 'assets/missingFile.png'
        }
      }));
    });
  }

  setData = (Data) => {
    if (FeedAreaComponent.FirstLoad) {
      this.Data = Data;
      FeedAreaComponent.HeadLines = Data;
      FeedAreaComponent.FirstLoad = !FeedAreaComponent.FirstLoad;
    } else {
      this.Data = Data;
    }
  }

  sourceLoad = (source) => {

    //Custom observable
    // unnecessary but implemented
    //------------------------
    const myObservable$ = new Observable((observer: Observer < string > ) => {
      observer.next(source.split('-').join(' ').toUpperCase());
    });

    myObservable$.subscribe(value => {
      this.TitlePage = value;
    })
    //----------------------------
    if (source === 'Top Head Lines') {
      this.Data = FeedAreaComponent.HeadLines;
      this.TitlePage = 'TOP HEAD LINES';
    } else if (source === 'My Articles') {
      if (!FeedAreaComponent.MyArticles) {
        FeedAreaComponent.MyArticles = [errorObject];
      }
      this.Data = FeedAreaComponent.MyArticles;
    } else {
      this.load(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${Key}`);
    }
  }

  setCreation = () => {
    this.SourceSet = new Set < String > (sourceList);
    return this.SourceSet;
  }


  searchFeeds = (searchA) => {
    this.searchTerm = searchA.value.searchTerm;
  }

  search = (searchTerm, item) => {
    if (searchTerm === "" || item.description.includes(searchTerm) || item.title.includes(searchTerm)) {
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
