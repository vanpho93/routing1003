import { Injectable } from '@angular/core';
import { Request } from './request.service';
import { Store } from '@ngrx/store';
import { AppState } from '../types';

@Injectable()

export class StoryService {
    constructor(
        private request: Request,
        private store: Store<AppState>
    ) {}

    getAllStory() {
        this.request.get('/story')
        .then(res => {
            this.store.dispatch({ type: 'SET_STORIES', stories: res.stories });
        })
        .catch(error => console.log(error));
    }

    createStory(content: string) {
        this.request.post('/story', { content })
        .then(res => this.store.dispatch({ type: 'CREATE_STORY', story: res.story }))
        .catch(error => console.log(error));
    }

    removeStory(_id: string) {
        this.request.delete('/story/' + _id)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
}
