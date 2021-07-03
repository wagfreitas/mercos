import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-usuario-menu',
  templateUrl: './usuario-menu.component.html',
  styleUrls: ['./usuario-menu.component.scss']
})
export class UsuarioMenuComponent implements OnInit {
  public email: string;
  public username: string;
  public logged: boolean;
  public dados: Array<any>;

  constructor(public authService: AuthService, public tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
       const res  = this.tokenStorage.getToken()
       if(res){
         const usuario = this.tokenStorage.getUser();
         this.email = usuario.user.email;
         this.username = usuario.user.name;
       }
  }

  logOut(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
