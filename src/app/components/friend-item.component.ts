import { Component, OnInit } from '@angular/core';
import { Request } from '../services/request.service';
import { UserInfo } from '../types';

@Component({
    template: `
        <h4>Friend Item Component</h4>
        <br/>
        <div>
            <p>id: {{ user._id }}</p>
            <h4>Name: {{ user.name }}</h4>
            <p>Email: {{ user.email }}</p>
            <br>
            <img src="{{ user.avatar }}" />
            <br>
            <br>
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
    user: UserInfo = {
        _id: '4c1f3acd-15e7-435f-a1d9-38f3c3571173',
        name: 'Jayce Graham DDS',
        email: 'Jalon43@gmail.com',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ryandownie/128.jpg'
    };
    constructor(private request: Request) {}

    ngOnInit() {
    }
}
