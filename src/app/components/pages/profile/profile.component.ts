/*import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  submitted = false;           // Marca si se intentó enviar el formulario
  updateSuccess = false;       // Controla si mostrar el mensaje de éxito
  userData: any;               // Almacena los datos actuales del usuario

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Cargar los datos del usuario actualmente autenticado desde localStorage
    this.userData = JSON.parse(localStorage.getItem('currentUser') || '{}');

    // Inicializar el formulario con los datos del usuario
    this.profileForm = this.fb.group({
      firstName: [this.userData.firstName, Validators.required],
      lastName: [this.userData.lastName, Validators.required],
      email: [this.userData.email, [Validators.required, Validators.email]],
      phone: [this.userData.phone, Validators.required],
      address: [this.userData.address || ''],
      birthDate: [this.userData.birthDate, Validators.required],

      // Campos para cambio de contraseña
      currentPassword: [''],
      newPassword: [
        '',
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,18}$/)
      ],
      confirmPassword: ['']
    }, { validators: this.passwordsMatch }); // Validación cruzada para las contraseñas
  }

  // Verifica si las nuevas contraseñas coinciden
  passwordsMatch(group: FormGroup) {
    const newPass = group.get('newPassword')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return newPass === confirm ? null : { mismatch: true };
  }

  // Método ejecutado al hacer submit del formulario
  onSubmit(): void {
    this.submitted = true;

    if (this.profileForm.invalid) return;

    const updatedData = this.profileForm.value;

    // Obtener lista de usuarios
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const index = users.findIndex((u: any) => u.email === this.userData.email);

    if (index !== -1) {
      // Si se quiere cambiar la contraseña, validar la actual
      if (updatedData.newPassword) {
        const currentStoredPass = users[index].password;
        if (updatedData.currentPassword !== currentStoredPass) {
          alert('La contraseña actual es incorrecta.');
          return;
        }
        users[index].password = updatedData.newPassword;
      }

      // Guardar datos actualizados (sin los campos de cambio de contraseña)
      const dataToUpdate = {
        ...users[index],
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        email: updatedData.email,
        phone: updatedData.phone,
        address: updatedData.address,
        birthDate: updatedData.birthDate
      };

      users[index] = dataToUpdate;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(dataToUpdate));

      this.updateSuccess = true;
      setTimeout(() => {
        this.updateSuccess = false;
      }, 4000);
    }
  }

  // Método para restaurar el formulario con los datos originales
  onReset(): void {
    this.profileForm.reset({
      ...this.userData,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    this.submitted = false;
  }
}
