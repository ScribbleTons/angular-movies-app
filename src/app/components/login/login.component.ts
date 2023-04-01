import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData = {
    email: '',
    password: '',
  };

  isSubmitting = false

  onSubmit() {
    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false
    }, 3000)
    console.log(this.formData)
  }
}
