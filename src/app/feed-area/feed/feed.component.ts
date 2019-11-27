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

  constructor() {
    this.toggle = true;
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
