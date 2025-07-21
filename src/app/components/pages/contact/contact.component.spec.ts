import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactoComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario debe ser inválido por defecto', () => {
    expect(component.contactForm.valid).toBeFalse();
  });

  it('debe marcar como inválido si el correo es incorrecto', () => {
    const email = component.contactForm.controls['email'];
    email.setValue('correo-sin-formato');
    expect(email.valid).toBeFalse();
    expect(email.errors?.['email']).toBeTruthy();
  });

  it('debe validar el número de teléfono chileno (9 dígitos)', () => {
    const telefono = component.contactForm.controls['phone_number'];
    telefono.setValue('912345678'); // válido
    expect(telefono.valid).toBeTrue();

    telefono.setValue('12345678'); // inválido
    expect(telefono.valid).toBeFalse();
  });

  it('el formulario debe ser válido con datos correctos', () => {
    component.contactForm.setValue({
      name: 'Robert',
      email: 'robert@email.com',
      phone_number: '912345678',
      msg_subject: 'Consulta',
      message: 'Hola, quiero saber más sobre sus productos'
    });
    expect(component.contactForm.valid).toBeTrue();
  });

  it('al enviar el formulario válido, debe marcar como enviado y resetear', () => {
    component.contactForm.setValue({
      name: 'Robert',
      email: 'robert@email.com',
      phone_number: '912345678',
      msg_subject: 'Consulta',
      message: 'Mensaje de prueba'
    });

    component.onSubmit();

    expect(component.enviado).toBeTrue();
    expect(component.contactForm.value).toEqual({
      name: null,
      email: null,
      phone_number: null,
      msg_subject: null,
      message: null
    });
  });
});
