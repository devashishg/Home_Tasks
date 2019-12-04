import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedAreaComponent } from './feed-area/feed-area.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewFeedComponent, myGuard } from './new-feed/new-feed.component';
import { LoginComponent } from './login/login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AuthGuardService } from './Service/Auth-Guard/auth-guard.service';
import { RestrictUser } from './Service/Restrict-Guard/Restrict-guard.service';


const routes: Routes = [
  {
    path: 'NewsFeeds',
    component: FeedAreaComponent,
    canActivate:[AuthGuardService],
    data: { title: 'NewsFeeds' }
  },
  {
    path: 'SuperUser',
    component: AdminMenuComponent,
    canActivate:[AuthGuardService,RestrictUser],
    data: { title: 'Dashboard' }
  },
  {
    path: 'CreateFeed',
    component: NewFeedComponent,
    canDeactivate :[ myGuard ],
    canActivate:[AuthGuardService,RestrictUser],
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
