import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,private localStorage:LocalStorageService) { }

  login(user:any){
    return this.http.post<{email:"",password:""}>(`http://localhost:8080/login`,user )
  }
  signUp(user:any){
    return this.http.post(`http://localhost:8080/signUp`,user)
  }
}
