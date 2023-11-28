import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user:any={
    email:"",
    password:""
  }
  constructor(private service:UserServiceService,
    private localStorage:LocalStorageService,
    private router :Router
    ){}
  
  
  
  login(user:any){
    console.log(user)
      this.service.login(user).subscribe(res=>{
        console.log(res)
        this.localStorage.store("email",res.email);
        this.router.navigate(['/home'])
      })
  }
  
ngOnInit(): void {
  console.log("login")  
  this.localStorage.clear("email")
}

}
