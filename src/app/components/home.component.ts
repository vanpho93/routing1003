import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, UserInfo, Story } from '../types';
import { StoryService } from '../services/story.service';

@Component({
    template: `
        <h4>Home Component</h4>
        <div *ngIf="user">
            <textarea [(ngModel)]="txtContent" class="form-control" placeholder="Bạn đang nghĩ gì?" cols="30" rows="5"></textarea>
            <br>
            <button class="btn btn-success" (click)="createStory();">Create story</button>
            <pre>{{ stories | json }}</pre>
        </div>
        <div *ngIf="!user">
            <a routerLink="/signin">Sign In</a>
        </div>
        <br>
        <br>
    `
})

export class HomeComponent implements OnInit {
    user: UserInfo;
    stories: Story[];
    txtContent = '';
    constructor(private store: Store<AppState>, private storyService: StoryService) {}

    ngOnInit() {
        this.store.select('user').subscribe(u => this.user = u);
        this.store.select('stories').subscribe(s => this.stories = s);
    }

    createStory() {
        this.storyService.createStory(this.txtContent);
        this.txtContent = '';
    }
}
