import { Injectable } from '@angular/core';
import { Request } from './request.service';

@Injectable()

export class UserService {
    constructor(private request: Request) {}

    signIn(email: string, plainPassword: string) {
        this.request.post('/user/signin', { email, plainPassword })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
}
