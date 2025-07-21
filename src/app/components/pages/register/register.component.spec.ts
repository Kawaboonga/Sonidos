import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

   beforeEach(() => {
    localStorage.clear(); // limpia localStorage antes de cada prueba
   });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el formulario con campos requeridos', () => {
    const form = component.registerForm;
    expect(form.contains('firstName')).toBeTrue();
    expect(form.contains('lastName')).toBeTrue();
    expect(form.contains('email')).toBeTrue();
    expect(form.contains('password')).toBeTrue();
    expect(form.contains('confirmPassword')).toBeTrue();
  });

  it('debería registrar un nuevo usuario si los datos son válidos', () => {
    spyOn(window, 'alert');

    component.registerForm.setValue({
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'juan@example.com',
      phone: '123456789',
      address: '',
      birthDate: '2000-01-01',
      password: 'Admin123!',
      confirmPassword: 'Admin123!',
      role: 'user'
    });

    component.onSubmit();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    expect(users.length).toBeGreaterThan(0);
    expect(users.some((u: any) => u.email === 'juan@example.com')).toBeTrue();
    expect(window.alert).toHaveBeenCalledWith('Registro exitoso. Ahora puedes iniciar sesión.');
  });

  it('no debería registrar si el formulario es inválido', () => {
    component.registerForm.setValue({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      birthDate: '',
      password: '',
      confirmPassword: '',
      role: ''
    });

    component.onSubmit();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    expect(users.length).toBe(0); // no se registra nadie
  });

  it('no debería permitir registro si el email ya está registrado', () => {
    spyOn(window, 'alert');

    const existingUser = {
      firstName: 'Pedro',
      lastName: 'López',
      email: 'juan@example.com',
      phone: '111111111',
      address: '',
      birthDate: '1990-01-01',
      password: 'Admin123!',
      confirmPassword: 'Admin123!',
      role: 'user'
    };

    localStorage.setItem('users', JSON.stringify([existingUser]));

    component.registerForm.setValue(existingUser);
    component.onSubmit();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    expect(users.length).toBe(1); // no se añade el duplicado
    expect(window.alert).toHaveBeenCalledWith('Este correo ya está registrado.');
  });
});
