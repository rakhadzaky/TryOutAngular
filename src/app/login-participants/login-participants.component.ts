import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-participants',
  templateUrl: './login-participants.component.html',
  styleUrls: ['./login-participants.component.css']
})
export class LoginParticipantsComponent implements OnInit {

  constructor(private _auth : AuthService, private router : Router) { }

  LoginUserData = {}
  Data = {}
  Re_type = ''
  regis = {}
  err = ''
  err_sign = ''
  err_username = ''
  err_code = ''
  err_first_name = ''
  err_last_name = ''
  err_school = ''
  err_password = ''
  ngOnInit() {
  }

  LoginUserProcess(){
    this.err = ''
    this._auth.LoginPar(this.LoginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.router.navigate(['/HomeParticipants'])
        },
        err => {
          console.log(err)
          this.err = err.error.error
        }
      )
  }

  RegisterUserProses(){
    this.err_sign = ''
    this.err_username = ''
    this.err_code = ''
    this.err_first_name = ''
    this.err_last_name = ''
    this.err_password = ''
    this.err_school = ''
    this._auth.RegisterPar(this.Data)
      .subscribe(
        res=>{
          this.regis = res
          console.log(this.regis)
          this.err_sign = 'Sign Up Success, Please go to login page'
        },
        err => {
          console.log(err)
          this.err_sign = err.error.message
          this.err_username = err.error.errors.username
          this.err_code = err.error.errors.code
          this.err_first_name = err.error.errors.first_name
          this.err_last_name = err.error.errors.last_name
          this.err_password = err.error.errors.password
          this.err_school = err.error.errors.school
        }
      )
  }

}
