import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedAreaComponent } from './feed-area/feed-area.component';
import { FeedComponent } from './feed-area/feed/feed.component';
import { NewFeedComponent, myGuard } from './new-feed/new-feed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { TitlePipe } from './Pipes/title.pipe';
import { DescriptionPipe } from './Pipes/description.pipe';
import { LoginServiceService } from './Service/LoginService/login-service.service';
import { AuthService } from './Service/Auth/auth.service';
import { DataFetchService } from './Service/DataFetch/data-fetch.service';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AuthGuardService } from './Service/Auth-Guard/auth-guard.service';
import { CommentsComponent } from './feed-area/feed/comments/comments.component';
import { RestrictUser } from './Service/Restrict-Guard/Restrict-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeedAreaComponent,
    FeedComponent,
    NewFeedComponent,
    PageNotFoundComponent,
    LoginComponent,
    TitlePipe,
    DescriptionPipe,
    AdminMenuComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    DataFetchService,myGuard,
    LoginServiceService,RestrictUser,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
