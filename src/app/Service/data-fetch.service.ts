import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {


  constructor(private http:HttpClient) { }


  public getNewsFeeds(url:string){
    return this.http.get(url);
  }
}
