import { Component, OnInit } from '@angular/core';
import { Request } from '../services/request.service';
import { UserInfo } from '../types';

@Component({
    template: `
        <h4>Friend Component</h4>
        <div *ngFor="let user of users">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" [src]="user.avatar" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{ user.name }}</h5>
                  <a routerLink="/friend/{{user._id}}" class="btn btn-primary">Go to profile</a>
                </div>
            </div>
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

export class FriendComponent implements OnInit {
    users: UserInfo[] = [];
    constructor(private request: Request) {}

    ngOnInit() {
        this.request.get('/user')
        .then(response => this.users = response.users);
    }
}
