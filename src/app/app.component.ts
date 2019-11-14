import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public  user:string;

  constructor(private route:Router) {
    if(!localStorage.getItem('status')||localStorage.getItem('status')==='false'){
      localStorage.getItem('status')==='false';
    }
  }
  title = 'HomeTasks';
}
