import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from './request.service';

@Injectable()

export class UserService {
    constructor(private request: Request, private router: Router) {}

    signIn(email: string, plainPassword: string) {
        this.request.post('/user/signin', { email, plainPassword })
        .then(response => {
            const { token } = response.user;
            localStorage.setItem('token', token);
            this.router.navigate(['/profile']);
        })
        .catch(() => alert('Kiểm tra lại thông tin đăng nhập.'));
    }

    logOut() {
        localStorage.removeItem('token');
        this.router.navigate(['/signin']);
    }
}
