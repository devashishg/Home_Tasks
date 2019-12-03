import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() public parentData;
  public toggle: boolean;
  public expand: string;
  public static vari = 0;
  public comments=['Nice Job !','Thanks for the update :) '];
  public commentsToShow;

  constructor() {
    //console.log(this.comments.length)
    this.toggle = true;
    this.commentsToShow = ` ${ this.comments.length } Comments below ...`;
  }

  ngOnInit() {
    this.expand = 'More';
    this.parentData['id'] = 'A' + FeedComponent.vari;
    FeedComponent.vari++;
  }

  toggleToggle() {
    this.expand = (this.expand == 'More' ? 'Less' : 'More');
  }


}
