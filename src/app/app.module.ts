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
import { LoginServiceService } from './Service/login-service.service';
import { AuthService } from './Service/auth.service';
import { DataFetchService } from './Service/data-fetch.service';

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
    DescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [
    LoginServiceService,
    AuthService,
    DataFetchService,
    myGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
