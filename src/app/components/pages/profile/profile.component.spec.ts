import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const mockUser = {
    firstName: 'Ana',
    lastName: 'Torres',
    email: 'ana@example.com',
    phone: '12345678',
    address: 'Calle Falsa 123',
    birthDate: '1995-05-15',
    password: 'Admin123!',
    role: 'user'
  };

  beforeEach(async () => {
    localStorage.setItem('currentUser', JSON.stringify(mockUser));
    localStorage.setItem('users', JSON.stringify([mockUser]));

    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('debería cargar los datos del usuario al iniciar', () => {
    const form = component.profileForm;
    expect(form.get('firstName')?.value).toEqual('Ana');
    expect(form.get('email')?.value).toEqual('ana@example.com');
  });

  it('debería permitir cambiar la contraseña si los datos son válidos', () => {
    component.profileForm.patchValue({
      currentPassword: 'Admin123!',
      newPassword: 'Nueva123!',
      confirmPassword: 'Nueva123!'
    });

    component.onSubmit();

    const updatedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUser = updatedUsers.find((u: any) => u.email === 'ana@example.com');
    expect(updatedUser.password).toBe('Nueva123!');
    expect(component.updateSuccess).toBeTrue();
  });
});
