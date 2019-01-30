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
  ngOnInit() {
  }

  LoginUserProcess(){
    this._auth.LoginPar(this.LoginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.router.navigate(['/HomeParticipants'])
        },
        err => console.log(err)
      )
  }

  RegisterUserProses(){
    this._auth.RegisterPar(this.Data)
      .subscribe(
        res=>{
          this.regis = res
          console.log(this.regis)
        },
        err => console.log(err)
      )
  }

}
