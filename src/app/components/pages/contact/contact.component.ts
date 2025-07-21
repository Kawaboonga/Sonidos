import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  enviado = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^9\d{8}$/)]],
      msg_subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      this.enviado = true;
      this.contactForm.reset();
      this.submitted = false;
    }
  }

  get f() {
    return this.contactForm.controls;
  }
}
