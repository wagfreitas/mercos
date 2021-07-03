import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    public authService: AuthService,
    public router: Router,
    public tokenStorage: TokenStorageService
  ){ }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn = !!this.tokenStorage.getToken();
     if(!isLoggedIn){
       this.router.navigate(['login'])
     }else{
       return true;
     }
  }
}
