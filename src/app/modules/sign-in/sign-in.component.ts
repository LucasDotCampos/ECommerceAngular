import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISession, IUser } from 'src/app/interfaces';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}
  public signInForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  public submitForm() {
    this.apiService.signIn(this.signInForm.value).subscribe({
      next: (data: Partial<ISession>) => {
        localStorage.setItem('token', JSON.stringify(data.token));
        console.log(data.token);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
