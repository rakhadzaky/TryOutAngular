import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeAdminService {

  private _baseUrl = "http://to.tritontelkom.id"
  // private _baseUrl = "http://192.16.123.254:8000"

  private _DetailAdminUrl = this._baseUrl + "/api/admin/detail"
  private _LogoutUrl = this._baseUrl + "/api/admin/logout"
  private _ListAllComAdm = this._baseUrl + "/api/admin/com"
  private _ListAllParAdm = this._baseUrl + "/api/admin/par"
  private _ListAllVerAdm = this._baseUrl + "/api/admin/ver"
  private _DetailParAdm = this._baseUrl + "/api/admin/par/find/"
  private _AddVerifDataAdm = this._baseUrl + "/api/admin/ver"
  private _DeleteVerifDataAdm = this._baseUrl + "/api/admin/ver/"
  Bearer = 'Bearer '+localStorage.getItem('token')
  token =
    {
      Accept : 'application/json',
      Authorization : this.Bearer
    }
  id = localStorage.getItem('editParAdmId')
  constructor(private http: HttpClient) { }

  getDetailAdmin(){
    console.log(this.token)
    return this.http.get<any>(this._DetailAdminUrl, {headers: this.token})
  }

  getListAllComAdm(){
    return this.http.get<any>(this._ListAllComAdm, {headers: this.token})
  }

  getListAllParAdm(){
    return this.http.get<any>(this._ListAllParAdm, {headers: this.token})
  }

  getListAllVerAdm(){
    return this.http.get<any>(this._ListAllVerAdm, {headers: this.token})
  }

  getDetailParAdm(){
    return this.http.get<any>(this._DetailParAdm + this.id, {headers: this.token})
  }

  DeleteVerAdm(idVer){
    return this.http.delete<any>(this._DeleteVerifDataAdm + idVer, {headers: this.token})
  }

  AddVerifAdmData(data){
    console.log(data)
    console.log(data.start)
    console.log(this.token)
    return this.http.post<any>(this._AddVerifDataAdm, data, {headers: this.token})
  }

  LogoutUser(){
    console.log(this.token)
    return this.http.get<any>(this._LogoutUrl, {headers: this.token})
    localStorage.removeItem('token')
  }
}
