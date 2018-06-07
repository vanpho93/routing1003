import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FriendComponent } from './components/friend.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';
import { SignUpComponent } from './components/sign-up.component';
import { SignInComponent } from './components/sign-in.component';
import { FriendItemComponent } from './components/friend-item.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { NavBarComponent } from './components/nav-bar.component';
import { StoryComponent } from './components/story.component';

import { Request } from './services/request.service';
import { UserService } from './services/user.service';
import { StoryService } from './services/story.service';
import { CommentService } from './services/comment.service';

import { MustBeGuestGuard } from './guards/must-be-guest.guard';
import { MustBeUserGuard } from './guards/must-be-user.guard';

import { userReducer, storiesReducer } from './reducers';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent, canActivate: [MustBeGuestGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [MustBeGuestGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [MustBeUserGuard] },
  { path: 'friend', component: FriendComponent, canActivate: [MustBeUserGuard] },
  { path: 'friend/:_id', component: FriendItemComponent, canActivate: [MustBeUserGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    FriendItemComponent,
    PageNotFoundComponent,
    NavBarComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user: userReducer, stories: storiesReducer }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Request, MustBeGuestGuard, MustBeUserGuard, UserService, StoryService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
