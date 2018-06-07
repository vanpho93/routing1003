import { Injectable } from '@angular/core';
import { Request } from './request.service';
import { Store } from '@ngrx/store';
import { AppState } from '../types';

@Injectable()

export class PeopleService {
    constructor(
        private request: Request,
        private store: Store<AppState>
    ) {}

    getPeople() {
        this.request.get('/friend')
        .then(response => this.store.dispatch({ type: 'SET_PEOPLE', people: response.people }))
        .catch(error => console.log(error));
    }

    addFriend(_id) {
        this.request.post('/friend/add/' + _id, null)
        .then(res => this.store.dispatch({ type: 'ADD_FRIEND', user: res.user }))
        .catch(console.log);
    }

    cancelRequest(_id) {
        this.request.delete('/friend/request/' + _id)
        .then(res => this.store.dispatch({ type: 'CANCEL_REQUEST', user: res.user }))
        .catch(console.log);
    }

    acceptRequest(_id) {
        this.request.post('/friend/accept/' + _id, {})
        .then(res => this.store.dispatch({ type: 'ACCEPT_REQUEST', user: res.user }))
        .catch(console.log);
    }

    removeFriend(_id) {
        this.request.delete('/friend/' + _id)
        .then(res => this.store.dispatch({ type: 'REMOVE_FRIEND', user: res.user }))
        .catch(console.log);
    }

    declineRequest(_id) {
        this.request.post('/friend/decline/' + _id, {})
        .then(res => this.store.dispatch({ type: 'DECLINE_REQUEST', user: res.user }))
        .catch(console.log);
    }
}
