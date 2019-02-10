import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _baseUrl = "http://to.tritontelkom.id"
  // private _baseUrl = "http://192.16.123.254:8000"
  private _baseUrl = "http://103.129.221.65:8000"
  // private _baseUrl = "http://rumahganesha.web.id:8000"

  private _LoginUrl = this._baseUrl + "/api/admin/login"
  private _LoginUrlCom = this._baseUrl + "/api/com/login"
  private _RegisUrlCom = this._baseUrl + "/api/com/register"
  private _LoginUrlPar = this._baseUrl + "/api/par/login"
  private _RegisUrlPar = this._baseUrl + "/api/par/register"
  constructor(private http: HttpClient) { }

  LoginUser(user){
    console.log(this._LoginUrl)
    console.log(user)
    return this.http.post<any>(this._LoginUrl, user)
  }

  LoginCom(user){
    return this.http.post<any>(this._LoginUrlCom, user)
  }

  RegisterCom(user){
    console.log(user)
    return this.http.post<any>(this._RegisUrlCom, user)
  }
  LoginPar(user){
    return this.http.post<any>(this._LoginUrlPar, user)
  }
  RegisterPar(user){
    return this.http.post<any>(this._RegisUrlPar, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
    console.log(!!localStorage.getItem('token'))
  }
}
