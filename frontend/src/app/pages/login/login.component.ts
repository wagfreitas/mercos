import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public hide = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(public fb: FormBuilder,
              public authService: AuthService,
              public snackBar: MatSnackBar,
              public router: Router,
              public tokenStorage: TokenStorageService
              ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      rememberMe: false
    });

    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true
    }
  }

  public  onLoginFormSubmit(values:Object): void {
    if (this.loginForm.valid) {
      const email = values['username'];
      const password = values['password'];
      const logged = values['rememberMe'];

      this.authService.login(email, password, logged)
        .subscribe(
          data => {
            this.tokenStorage.saveToken(data.token);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.reloadPage();
            this.router.navigate(['/produtos'])
          },
          err => {
            this.errorMessage = err.error.error;
            this.isLoginFailed = true;
            this.snackBar.open(`Houve um erro no login ! ${this.errorMessage}`, '×', {
              panelClass: 'warn',
              verticalPosition: 'top',
              duration: 3000,
            });
            console.log(err.error.error)
          }
        )
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

}
