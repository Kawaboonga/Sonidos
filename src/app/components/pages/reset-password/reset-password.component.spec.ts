import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetPasswordComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener los campos email, newPassword y confirmPassword', () => {
    const form = component.form;
    expect(form.contains('email')).toBeTrue();
    expect(form.contains('newPassword')).toBeTrue();
    expect(form.contains('confirmPassword')).toBeTrue();
  });

  it('debería marcar inválido si las contraseñas no coinciden', () => {
    component.form.setValue({
      email: 'test@example.com',
      newPassword: 'Admin123!',
      confirmPassword: 'Otro123!'
    });
    expect(component.form.valid).toBeFalse();
  });

  it('debería establecer resetSuccess en true si el usuario existe y contraseña se actualiza', () => {
    const mockUsers = [{ email: 'test@example.com', password: 'Vieja123!' }];
    localStorage.setItem('users', JSON.stringify(mockUsers));

    component.form.setValue({
      email: 'test@example.com',
      newPassword: 'Nueva123!',
      confirmPassword: 'Nueva123!'
    });

    component.onSubmit();

    const updatedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    expect(updatedUsers[0].password).toBe('Nueva123!');
    expect(component.resetSuccess).toBeTrue();
  });

  it('debería establecer resetSuccess en false si el usuario no existe', () => {
    localStorage.setItem('users', JSON.stringify([{ email: 'otro@example.com', password: '123' }]));

    component.form.setValue({
      email: 'inexistente@example.com',
      newPassword: 'Admin123!',
      confirmPassword: 'Admin123!'
    });

    component.onSubmit();

    expect(component.resetSuccess).toBeFalse();
  });

  it('no debería actualizar si el formulario es inválido', () => {
    component.form.setValue({
      email: '',
      newPassword: '',
      confirmPassword: ''
    });

    component.onSubmit();

    expect(component.resetSuccess).toBeFalse();
  });
});
