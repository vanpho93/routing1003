import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, UserInfo } from './types';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: UserInfo;
  constructor(private store: Store<AppState>, private userService: UserService) {}

  ngOnInit() {
    this.store.select('user').subscribe(u => this.user = u);
    this.userService.checkToken();
  }
}
