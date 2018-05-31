import { Component, OnInit } from '@angular/core';
import { Request } from '../services/request.service';
import { UserInfo } from '../types';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
        <h4>Friend Item Component</h4>
        <br/>
        <div *ngIf="user">
            <p>id: {{ user._id }}</p>
            <h4>Name: {{ user.name }}</h4>
            <p>Email: {{ user.email }}</p>
            <br>
            <img src="{{ user.avatar }}" />
            <br>
            <br>
            <a routerLink="/friend">Go Back</a>
        </div>
        <div *ngIf="errorMessage">
            <p>{{ errorMessage }}</p>
            <a routerLink="/friend">Go Back</a>
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

export class FriendItemComponent implements OnInit {
    user: UserInfo = null;
    errorMessage = '';
    constructor(private request: Request, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe(p => {
            const _id = p.get('_id');
            this.request.get('/user/' + _id)
            .then(response => this.user = response.user)
            .catch(response => this.errorMessage = response.message);
        });
    }
}
