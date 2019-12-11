import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public  user: string;
  title = 'HomeTasks';

  constructor() {
  }

  ngOnInit() {
  }
}
