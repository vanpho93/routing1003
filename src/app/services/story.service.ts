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
        .then(res => this.store.dispatch({ type: 'REMOVE_STORY', _id }))
        .catch(error => console.log(error));
    }

    likeStory(_id: string, idUser: string) {
        this.request.post('/story/like/' + _id, {})
        .then(res => this.store.dispatch({ type: 'LIKE_STORY', _id, idUser }))
        .catch();
    }

    dislikeStory(_id: string, idUser: string) {
        this.request.post('/story/dislike/' + _id, {})
        .then(res => this.store.dispatch({ type: 'DISLIKE_STORY', _id, idUser }))
        .catch();
    }
}
