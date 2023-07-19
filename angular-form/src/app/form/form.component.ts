import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formgroup: FormGroup;
  name: string = ''

  constructor(private formBuilder: FormBuilder) {
    this.formgroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.minLength(8)],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.formgroup.valid) {
      alert('Formulário válido. Dados enviados:');
      // fazer logica dps
    } else {
      alert('Formulário inválido. Verifique os campos.');
    }
  }
}
