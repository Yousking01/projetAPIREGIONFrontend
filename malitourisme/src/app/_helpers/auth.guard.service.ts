import { Injectable } from '@angular/core';
//import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
//import { State } from 'ionicons/dist/types/stencil-public-runtime';
import { TokenService } from '../_services/token.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      

      if(this.tokenService.isLogged()){
        return true
      }

      return this.router.navigate(['auth'])
  }
  
}  
    


