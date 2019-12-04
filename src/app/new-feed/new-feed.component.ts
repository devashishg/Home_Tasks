import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { Router, CanDeactivate, CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot} from '@angular/router';
import { LoginServiceService } from '../Service/LoginService/login-service.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import value from '*.json';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.css']
})
export class NewFeedComponent implements OnInit{
  @ViewChild('pf',{read:NgForm, static:false}) public form : NgForm ;

  public user: string;
  public submitted: boolean;
  pf:FormGroup;

  constructor(private route: Router, private logInServices: LoginServiceService) {
    this.submitted = false;
  }

  ngOnInit() {
    this.user = this.logInServices.getUser();
    console.log(this.user);

    this.pf = new FormGroup({
      title: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(50),Validators.pattern("^[a-zA-Z0-9, _.]+$")]),
      ShortDesc: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(100)]),
      Author: new FormControl(this.user, [Validators.required]),
      publishedAt: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.pattern("http[s]?://.+[.].+")]),
      description: new FormControl('',  [Validators.required,  Validators.minLength(20)]),
      urlToImage: new FormControl('', [Validators.pattern("http[s]?://.+[.].+")]) 
    });
  }

  navigateBack() {
    this.route.navigate(['/NewsFeeds']);
  }

  FormSubmit(){
    alert('Article Saved !!');
    console.log(this.pf.value);
    this.resetForm(this.pf);
  }

  resetForm = (obj = this.pf)=>{
    obj.reset({
      'title': '',
      'Author' : this.user,
      'publishedAt': '',
      'ShortDesc': '',
      'url': '',
      'description': '',
      'urlToImage': '',
    });
  }

}





@Injectable()
export class myGuard implements CanDeactivate<NewFeedComponent>{
  canDeactivate(component : NewFeedComponent): boolean  {
    console.log("Method not implemented.");
    if(component.pf.dirty){
        return confirm('Changes might not saved, Sure want to continue!!');
    }
    return true;
  }
  
}

