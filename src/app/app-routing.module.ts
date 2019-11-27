import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedAreaComponent } from './feed-area/feed-area.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewFeedComponent } from './new-feed/new-feed.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'NewsFeeds',
    component: FeedAreaComponent,
    data: { title: 'NewsFeeds' }
  },
  {
    path: 'CreateFeed',
    component: NewFeedComponent,
    data: { title: 'NewsFeeds' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Signin | NewsFeeds' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
