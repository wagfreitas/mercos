import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  usuarioSenhaIguaisValidator,
  emailValidator,
} from 'src/app/shared/utils/app-validators';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {
  public registerForm!: FormGroup;
  public hide = true;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(
    public fb: FormBuilder,
    public router: Router,
    public snackBar: MatSnackBar,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        username: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: usuarioSenhaIguaisValidator('password', 'confirmPassword') }
    );
  }

  public onRegisterFormSubmit(values: Object): void {
    if (this.registerForm.valid) {
      const email = values['email'];
      const password = values['password'];
      const usuario = values['username'];

      const dadosReg = {
        email: email,
        password: password,
        usuario: usuario,
      }
      this.authService.register(usuario, email, password).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.snackBar.open(data.message, '×', {
            panelClass: 'sucess',
            verticalPosition: 'top',
            duration: 4000,
          });

          this.router.navigate(['/login'])

        },
        err => {
          this.errorMessage = err.error.error;
          this.snackBar.open(`Houve um erro no cadastro ! ${this.errorMessage}`, '×', {
            panelClass: 'warn',
            verticalPosition: 'top',
            duration: 4000,
          });


        }
      )
    }
  }
}
