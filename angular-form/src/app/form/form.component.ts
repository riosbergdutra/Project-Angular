import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formgroup: FormGroup;
  name: string = ''

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.formgroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.minLength(8)],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.formgroup.valid) {
      const formData = this.formgroup.value;

      // Envia os dados para o json-server usando o HttpClient
      this.http.post('http://localhost:3000/formData', formData).subscribe(
        (response) => {
          alert('Dados do formulário enviados com sucesso:');

          // Após o envio bem-sucedido, navegue para a rota 'resultado' (ou qualquer outra rota desejada)
          this.router.navigate(['/página']);
        },
        (error) => {
          console.error('Erro ao enviar os dados do formulário:', error);
        }
      );
    } else {
      alert('Formulário inválido. Verifique os campos.');
    }
  }
}
