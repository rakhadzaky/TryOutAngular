import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeCommitteeService {

  private _baseUrl = "http://to.tritontelkom.id"
  // private _baseUrl = "http://192.16.123.254:8000"

  private _GetParUrl = this._baseUrl + "/api/com/par"
  private _GetResultUrl = this._baseUrl + "/api/com/par/results"
  private _GetDetailParUrl = this._baseUrl + "/api/com/par/"

  private _ListQuestionsUrl = this._baseUrl + "/api/com/tests"
  private _DetailAkunCom =  this._baseUrl + "/api/com/detail"
  private _LogoutCom = this._baseUrl + "/api/com/logout"
  private _InsertTest = this._baseUrl + "/api/com/tests"
  private _DetailTest = this._baseUrl + "/api/com/tests/"
  private _DataQuestions = "/questions"
  private _DataAnswer = "/answers"
  Bearer = 'Bearer '+localStorage.getItem('token')
  token =
    {
      Accept : 'application/json',
      Authorization : this.Bearer
    }
  tokenPut =
  {
    Accept : 'application/json',
    Authorization : this.Bearer,
    'Content-Type' : 'application/x-www-form-urlencoded'
  }
  id = localStorage.getItem('detailTest')
  idQuest = localStorage.getItem('idQuestionsAns')
  constructor(private http: HttpClient) { }

  getAllPar(){
    return this.http.get<any>(this._GetParUrl, {headers: this.token})
  }
  getAllResult(){
    return this.http.get<any>(this._GetResultUrl, {headers: this.token})
  }
  getDetailPar(id){
    return this.http.get<any>(this._GetDetailParUrl + id, {headers: this.token})
  }

  getAllQuestions(){
    return this.http.get<any>(this._ListQuestionsUrl, {headers : this.token})
  }

  getDetailAkunCom(){
    return this.http.get<any>(this._DetailAkunCom, {headers: this.token})
  }

  getLogoutComProses(){
    return this.http.get<any>(this._LogoutCom, {headers: this.token})
  }
  AddTestCom(data){
    console.log(data)
    return this.http.post<any>(this._InsertTest, data, {headers: this.token})
  }
  DetailTestCom(){
    return this.http.get<any>(this._DetailTest + this.id, {headers: this.token})
  }
  DeleteTestCom(id){
    console.log(id)
    return this.http.delete<any>(this._DetailTest + id, {headers: this.token})
  }
  GetDataQuestions(){
    return this.http.get<any>(this._DetailTest + this.id + this._DataQuestions, {headers: this.token})
  }
  AddDataQuetions(data){
    console.log(data)
    return this.http.post<any>(this._DetailTest + this.id + this._DataQuestions, data, {headers: this.token})
  }
  DeleteDataQuestion(id){
    console.log(id)
    return this.http.delete<any>(this._DetailTest + this.id + this._DataQuestions + "/" + id, {headers: this.tokenPut})
  }
  AddDataAnswer(data, idQuest){
    console.log(data)
    console.log(idQuest)
    return this.http.post<any>(this._DetailTest + this.id + this._DataQuestions + "/" + idQuest + this._DataAnswer, data, {headers: this.token})
  }
  DeleteDataAnswer(id){
    console.log(id)
    return this.http.delete<any>(this._DetailTest + this.id + this._DataQuestions + "/" + this.idQuest + this._DataAnswer + "/" + id, {headers :this.tokenPut})
  }
  GetDataAnswerQuest(){
    return this.http.get<any>(this._DetailTest + this.id + this._DataQuestions + "/" + this.idQuest + this._DataAnswer, {headers: this.token})
  }
  GetDetailDataQuestion(){
    return this.http.get<any>(this._DetailTest + this.id + this._DataQuestions + "/" + this.idQuest, {headers: this.token})
  }
  PutDetailDataQuestion(data){
    console.log(this.tokenPut)
    console.log(data)
    return this.http.put<any>(this._DetailTest + this.id + this._DataQuestions + "/" + this.idQuest, data, {headers: this.tokenPut})
  }

}
