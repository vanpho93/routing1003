import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Story, People } from '../types';
import { PeopleService } from '../services/people.service';

@Component({
    template: `
        <h4>Friend Component</h4>
        <h4>Friends</h4>
        <div *ngFor="let user of people.friends">
            <p style="padding: 10px; background-color: #FECCB7; border-radius: 3px; width: 400px">
                <a style="font-weight: bold">{{ user.name }}</a>
                <button class="btn btn-danger" style="margin-left: 15px" (click)="removeFriend(user._id)">Remove friend</button>
            </p>
        </div>
        <h4>Sent Requests</h4>
            <div *ngFor="let user of people.sentRequests">
                    <p style="padding: 10px; background-color: #D0C8DE; border-radius: 3px; width: 400px">
                    <a style="font-weight: bold">{{ user.name }}</a>
                    <button class="btn btn-warning" style="margin-left: 15px" (click)="cancelRequest(user._id)">Cancel</button>
                </p>
            </div>
        <h4>Incomming Requests</h4>
        <div *ngFor="let user of people.incommingRequests">
            <p style="padding: 10px; background-color: #CFCFCF; border-radius: 3px; width: 400px">
                <a style="font-weight: bold">{{ user.name }}</a>
                <button class="btn btn-success" style="margin-left: 15px" (click)="acceptRequest(user._id)">Accept friend</button>
                <button class="btn btn-primary" style="margin-left: 15px" (click)="declineRequest(user._id)">Decline friend</button>
            </p>
        </div>
        <h4>Other Users</h4>
        <div *ngFor="let user of people.otherUsers">
            <p style="padding: 10px; background-color: #EAEAF3; border-radius: 3px; width: 400px">
                <a style="font-weight: bold">{{ user.name }}</a>
                <button class="btn btn-success" style="margin-left: 15px" (click)="addFriend(user._id)">Add friend</button>
            </p>
        </div>
    `,
    styles: [`
        .card {
            padding: 10px;
            border: solid 1px #D1D1D1;
            border-radius: 5px;
            margin: 5px;
        }
    `]
})

export class FriendComponent {
    people: People;

    constructor(private store: Store<AppState>, private peopleService: PeopleService) {
        this.store.select('people').subscribe(p => this.people = p);
    }

    addFriend(_id: string) { this.peopleService.addFriend(_id); }
    cancelRequest(_id: string) { this.peopleService.cancelRequest(_id); }
    acceptRequest(_id: string) { this.peopleService.acceptRequest(_id); }
    declineRequest(_id: string) { this.peopleService.declineRequest(_id); }
    removeFriend(_id: string) { this.peopleService.removeFriend(_id); }
}
