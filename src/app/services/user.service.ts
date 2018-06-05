import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from './request.service';
import { Store } from '@ngrx/store';
import { AppState, UserInfo } from '../types';

@Injectable()

export class UserService {
    constructor(
        private request: Request,
        private router: Router,
        private store: Store<AppState>
    ) {}

    signIn(email: string, plainPassword: string) {
        this.request.post('/user/signin', { email, plainPassword })
        .then(response => {
            const { token } = response.user;
            localStorage.setItem('token', token);
            this.store.dispatch({ type: 'SET_USER', user: response.user });
            this.router.navigate(['/profile']);
        })
        .catch(() => alert('Kiểm tra lại thông tin đăng nhập.'));
    }

    checkToken() {
        if (!localStorage.getItem('token')) return;
        this.request.get('/user/check')
        .then(response => {
            const { token } = response.user;
            localStorage.setItem('token', token);
            this.store.dispatch({ type: 'SET_USER', user: response.user });
        })
        .catch(error => console.log(error));
    }

    logOut() {
        localStorage.removeItem('token');
        this.store.dispatch({ type: 'LOG_OUT' });
        this.router.navigate(['/signin']);
    }
}
