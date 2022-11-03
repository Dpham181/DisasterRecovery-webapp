import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGGuard implements CanActivate {
  constructor(private router:Router){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('JWT_token') === null) {      
        this.router.navigate(['/login']);      
        return false;
      }
    
      return true;
  }
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
      console.log(localStorage.getItem('role'))
      if (localStorage.getItem('role') !== "admin") {
        alert('You are not allowed to view this page');
        return false;
      }
      return true;
  }
  
}
