import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

user:any={
  email:"",
  password:""
}
  constructor(private service:UserServiceService){}



  signUp(user:any){
    this.service.signUp(user).subscribe(res=>{
      console.log(res)
      
    })
  }

}
