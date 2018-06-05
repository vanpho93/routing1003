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
      <img *ngIf="isLiked" src="https://tr.facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/thumb-drawn.svg" />
      <a (click)="toggleLike();">{{ story.fans.length }} likes</a>
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

        img { width: 20px; height: 20px }
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

    toggleLike() {
        if (this.isLiked) {
            return this.storyService.dislikeStory(this.story._id, this.idUser);
        }
        this.storyService.likeStory(this.story._id, this.idUser);
    }

    get isLiked(): boolean {
        return this.story.fans.includes(this.idUser);
    }
}
