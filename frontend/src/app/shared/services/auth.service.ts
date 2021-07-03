import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const urlAPI = environment.apiURL

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userData: User;


  constructor(
    public router: Router,
    public ngZone: NgZone,
    public httpCliente: HttpClient
  ) {
    /* Salvando os dados do usuário no localstrorage */
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // });
  }

  // logar com mongoDB
  public  login(emailPar, passwordPar, loggedPar): Observable<any> {
    return this.httpCliente.post(`${urlAPI}/signin`, {email:emailPar, password: passwordPar }, httpOptions);

  }

  public register(usernamePar, emailPar, passwordPar): Observable<any> {
    const dadosCad = {
      username: usernamePar,
      email: emailPar,
      password: passwordPar
    }
    return this.httpCliente.post<User>(`${urlAPI}/usuarios`, dadosCad, httpOptions)

  }

}
