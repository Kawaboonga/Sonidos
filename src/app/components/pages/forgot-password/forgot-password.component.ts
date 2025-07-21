/*import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

}*/


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  resetSuccess = false;
  userFound = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const email = this.form.value.email;
    const user = users.find((u: any) => u.email === email);

    if (user) {
      this.userFound = true;
      this.resetSuccess = true;
      // Aquí se podría enviar un email real si tuvieras backend
      console.log(`Enlace de recuperación enviado a ${email}`);
    } else {
      this.userFound = false;
      this.resetSuccess = false;
    }
  }
}
