import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  formData = {
    fullname: '',
    password: '',
    confirm_password: '',
    email: '',
  };
  isSubmitting = false;

  onSubmit() {
    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
    }, 3000);
    console.log(this.formData);
  }
}
