import { Component, OnInit } from '@angular/core';
import { Request } from '../services/request.service';

@Component({
    template: `
        <h4>Friend Component</h4>
    `
})

export class FriendComponent implements OnInit {
    constructor(private request: Request) {}

    ngOnInit() {
        this.request.get('/user')
        .then(response => {
            console.log(response.users);
        });
    }
}
