//import { Component, OnInit } from '@angular/core';

//@Component({
//  selector: 'app-register',
//  templateUrl: './register.component.html',
 // styleUrls: ['./register.component.scss']
//})
//export class RegisterComponent implements OnInit {

 // constructor() { }

 // ngOnInit(): void {
  //}

//}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: [''],
      birthDate: ['', [Validators.required, this.minAgeValidator(13)]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,18}$/)
      ]],
      confirmPassword: ['', Validators.required],
      role: ['user', Validators.required]
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(control: AbstractControl): any {
    const pass = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  minAgeValidator(minAge: number) {
    return (control: AbstractControl) => {
      const birthDate = new Date(control.value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age >= minAge ? null : { underage: true };
    };
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = this.registerForm.value;

    const exists = users.some((u: any) => u.email === newUser.email);
    if (exists) {
      alert('Este correo ya está registrado.');
      return;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    this.registerForm.reset();

    // Redirigir al login
    this.router.navigate(['/login']);
  }

  onReset() {
    this.registerForm.reset();
  }

  isInvalid(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  getError(controlName: string, error: string): boolean {
    const control = this.registerForm.get(controlName);
    return !!(control && control.hasError(error));
  }
}
