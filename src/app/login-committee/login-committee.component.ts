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
  err = ''
  err_regis = ''
  err_username = ''
  err_code = ''
  err_name = ''
  err_password = ''
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit() {

  }

  LoginUserProcess(){
    this._auth.LoginCom(this.LoginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          // this._router.navigate(['/HomeCommittee'])
          window.location.href = '/HomeCommittee'
        },
        err => {
          console.log(err)
          this.err = err.error.error
          console.log(err.error.error)
        }
      )
  }

  RegisterUserProses(){
    this._auth.RegisterCom(this.Data)
      .subscribe(
        res=>{
          this.regis = res
          console.log(this.regis)
        },
        err => {
          console.log(err)
          this.err_regis = err.error.message
          this.err_username = err.error.errors.username
          this.err_code = err.error.errors.code
          this.err_name = err.error.errors.name
          this.err_password = err.error.errors.password
        }
      )
  }

}
