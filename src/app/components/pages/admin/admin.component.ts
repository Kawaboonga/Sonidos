import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  profileForm!: FormGroup;
  submitted = false;
  updateSuccess = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this.profileForm = this.fb.group({
      firstName: [currentUser.firstName || '', Validators.required],
      lastName: [currentUser.lastName || '', Validators.required],
      email: [currentUser.email || '', [Validators.required, Validators.email]],
      phone: [currentUser.phone || '', Validators.required],
      address: [currentUser.address || ''],
      birthDate: [currentUser.birthDate || '', Validators.required],
      currentPassword: [''],
      newPassword: ['', [
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,18}$/)
      ]],
      confirmPassword: ['']
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(control: AbstractControl): any {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.profileForm.invalid) return;

    const updatedData = this.profileForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const index = users.findIndex((u: any) => u.email === updatedData.email);

    if (index !== -1) {
      users[index] = {
        ...users[index],
        ...updatedData,
        password: updatedData.newPassword || users[index].password
      };
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(users[index]));
      this.updateSuccess = true;
    }
  }

  onReset(): void {
    this.profileForm.reset();
    this.submitted = false;
    this.updateSuccess = false;
  }
}