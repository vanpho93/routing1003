import { Injectable } from '@angular/core';
import { Request } from './request.service';
import { Store } from '@ngrx/store';
import { AppState } from '../types';

@Injectable()

export class CommentService {
    constructor(
        private request: Request,
        private store: Store<AppState>
    ) {}

    createComment(content: string, idStory: string) {
        this.request.post('/comment', { content, idStory })
        .then(res => {
            this.store.dispatch({ type: 'ADD_COMMENT', comment: res.comment, _id: idStory });
        })
        .catch(error => console.log(error));
    }
}
