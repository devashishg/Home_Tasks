import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public  BouttonText:string;
  constructor(private route:Router) {
  }
  
  ngOnInit() {console.log(this.route.url);
    if(localStorage.getItem('status')==='false'){document.getElementsByTagName('button')[0].innerHTML="Logout";}
    if(localStorage.getItem('status')==='true'){document.getElementsByTagName('button')[0].innerHTML="Logout";}
  }

  HeaderButtonClick(){console.log('hi');
    localStorage.setItem('status','false');this.route.navigate(['/login']);
  }
}