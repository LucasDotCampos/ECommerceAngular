import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  passwordMatch: boolean = false;
  checkingPassword: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  public signUpForm: FormGroup = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        ),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
      ],
    ],
    confirm_password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
      ],
    ],
  });

  public isPasswordMatching() {
    let password = this.signUpForm.get('password')?.value;
    let confirm_password = this.signUpForm.get('confirm_password')?.value;
    this.checkingPassword = true;
    if (password === confirm_password) {
      this.passwordMatch = true;
      this.checkingPassword = false;
    }
  }
  public async submitForm() {
    let email = this.signUpForm.get('email')?.value;
    let password = this.signUpForm.get('password')?.value;
    let user = { email: email, password: password };
    this.apiService.signUp(user).subscribe({
      next: () => {
        console.log('success');
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
    console.log(user);
  }
}
