import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  template: `
        <h4>Sign In</h4>
        <form class="form-group" [formGroup]="formSignIn" (ngSubmit)="signIn();">
            <input
                class="form-control"
                placeholder="Email"
                formControlName="email"
            />
            <div style="margin: 10px;">
                <i *ngIf="email.invalid && email.touched">Email không hợp lệ</i>
            </div>
            <input
                class="form-control"
                placeholder="Password"
                formControlName="password"
                type="password"
            />
            <div style="margin: 10px;">
                <i *ngIf="password.invalid && password.touched">Password không hợp lệ</i>
            </div>
            <button class="btn btn-success" [disabled]="formSignIn.invalid">
                Sign In
            </button>
        </form>
  `,
  styles: [`
      form { width: 300px; }
      i { color: red; }
      input.ng-touched.ng-invalid { border-color: red }`
    ]
})

export class SignInComponent {
    formSignIn: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService) {
        this.formSignIn = this.fb.group({
            email: ['teo@gmail.com', [Validators.email, Validators.required]],
            password: ['123', [Validators.minLength(3), Validators.required]]
        });
    }

    signIn() {
        const { email, password } = this.formSignIn.value;
        this.userService.signIn(email, password);
    }

    get email() {
        return this.formSignIn.get('email');
    }

    get password() {
        return this.formSignIn.get('password');
    }
}
