import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener un formulario con el campo email', () => {
    const form = component.form;
    expect(form.contains('email')).toBeTrue();
  });

  it('debería marcar el campo email como inválido si está vacío', () => {
    const control = component.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalse();
  });

  it('debería marcar el campo email como inválido si no es un correo', () => {
    const control = component.form.get('email');
    control?.setValue('no-es-un-email');
    expect(control?.valid).toBeFalse();
  });

  it('debería establecer userFound y resetSuccess en true si el correo existe', () => {
    const testUser = { email: 'test@example.com' };
    localStorage.setItem('users', JSON.stringify([testUser]));

    component.form.get('email')?.setValue('test@example.com');
    component.onSubmit();

    expect(component.userFound).toBeTrue();
    expect(component.resetSuccess).toBeTrue();
  });

  it('debería establecer userFound y resetSuccess en false si el correo no existe', () => {
    localStorage.setItem('users', JSON.stringify([{ email: 'otro@correo.com' }]));

    component.form.get('email')?.setValue('inexistente@example.com');
    component.onSubmit();

    expect(component.userFound).toBeFalse();
    expect(component.resetSuccess).toBeFalse();
  });
});
