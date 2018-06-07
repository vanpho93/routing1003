import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, UserInfo } from './types';
import { UserService } from './services/user.service';
import { StoryService } from './services/story.service';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: UserInfo;
  constructor(
    private store: Store<AppState>,
    private userService: UserService,
    private storyService: StoryService,
    private peopleService: PeopleService,
  ) {}

  ngOnInit() {
    this.store.select('user').subscribe(u => this.user = u);
    this.userService.checkToken();
    this.storyService.getAllStory();
    this.peopleService.getPeople();
  }
}
