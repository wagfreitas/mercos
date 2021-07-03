import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-toolbar1',
  templateUrl: './toolbar1.component.html',
  styleUrls: ['./toolbar1.component.scss'],
})
export class Toolbar1Component implements OnInit {
  //criamos uma variável do tipo Output que é do tipo EventEmitter que irá passar valores do componente filho (toolbar) para o componente pai
  //(page). No caso sera emitido o evento de clicar no hamburguinho da barra para abrir ou fechar o menu lateral
  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onExportar: EventEmitter<any> = new EventEmitter<any>();

  public isLoggedIn: boolean = false;

  constructor(public appService: AppService,
              public authService: AuthService,
              public tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken()
  }

  public sidenavToggle() {
    this.onMenuIconClick.emit();
  }

  public exportar(){
    this.onExportar.emit(true);
  }
}
