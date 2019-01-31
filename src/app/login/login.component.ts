import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginUserData = {}
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  LoginUserProcess(){
    this._auth.LoginUser(this.LoginUserData)
      .subscribe(
        res => {
          console.log('test')
          localStorage.setItem('token', res.token)
          this._router.navigate(['/HomeAdmin'])
        },
        err => console.log(err)
      )
  }

}
