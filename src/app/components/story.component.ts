import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Story } from '../types';
import { StoryService } from '../services/story.service';

@Component({
    selector: 'app-story',
    template: `
    <div class="story">
      <p>{{ story.content }}</p>
      <hr>
      <a>{{ story.fans.length }} likes</a>
      <br>
      <button (click)="removeStory();" *ngIf="story.author === idUser">Remove</button>
    </div>
    `,
    styles: [`
        .story {
            padding: 10px;
            margin: 10px;
            background-color: #E5E4E5;
            border-radius: 5px;
        }
    `]
})

export class StoryComponent {
    @Input() story: Story;
    idUser: string;
    constructor(private storyService: StoryService, private store: Store<AppState>) {
        this.store.select('user').subscribe(u => this.idUser = u._id);
    }

    removeStory() {
        this.storyService.removeStory(this.story._id);
    }
}
