import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-committee',
  templateUrl: './login-committee.component.html',
  styleUrls: ['./login-committee.component.css']
})
export class LoginCommitteeComponent implements OnInit {

  LoginUserData = {}
  Data = {}
  Re_type = ''
  regis = {}
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit() {

  }

  LoginUserProcess(){
    this._auth.LoginCom(this.LoginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['/HomeCommittee'])
        },
        err => console.log(err)
      )
  }

  RegisterUserProses(){
    this._auth.RegisterCom(this.Data)
      .subscribe(
        res=>{
          this.regis = res
          console.log(this.regis)
        },
        err => console.log(err)
      )
  }

}
