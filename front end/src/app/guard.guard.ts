import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
class PermissionsService {

 constructor(private  localStorage:LocalStorageService,
 private router: Router,
 ) { 
  
 }

 canActivate(): boolean {
  if (this.localStorage.retrieve("email")) {
    return true
  } else {
    this.router.navigate(['/login']);
    return false
    }
  }
 

 }

export const guardGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate();
};
