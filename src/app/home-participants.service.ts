import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeParticipantsService {

  private _baseUrl = "http://to.tritontelkom.id"

  private _detailPar = this._baseUrl + "/api/par/detail"
  private _testUrl = this._baseUrl + "/api/par/test"
  private _startUrl = "/start"

  private _getAllQuestions = "/getQuestions"
  private _putAnswer = "/answers"

  private _finish = "/finish"

  Bearer = 'Bearer '+localStorage.getItem('token')
  token =
    {
      Accept : 'application/json',
      Authorization : this.Bearer
    }
  Bearer_test = 'Bearer '+localStorage.getItem('token_start')
  token_test = {
    Accept : 'application/json',
    Authorization : this.Bearer_test,
    // 'Content-Type' : 'application/x-www-form-urlencoded'
  }
  id = localStorage.getItem('idTest')
  id_quest = localStorage.getItem('number_quest')
  body ={}
  constructor(private http: HttpClient) { }

  getDetailPar(){
    return this.http.get<any>(this._detailPar, {headers: this.token})
  }

  getAllQuestions(){
    return this.http.get<any>(this._testUrl, {headers : this.token})
  }

  getDetailTestPar(){
    console.log(this.id)
    return this.http.get<any>(this._testUrl + "/" + this.id, {headers: this.token})
  }

  startTestPar(data){
    console.log(data)
    return this.http.post<any>(this._testUrl + "/" + this.id + this._startUrl, data, {headers: this.token})
  }


  AnswerGetAllQuestions(){
    return this.http.get<any>(this._testUrl + "/" + this.id + this._getAllQuestions, {headers: this.token_test})
  }
  AnswerGetQuestion(){
    return this.http.get<any>(this._testUrl + "/" + this.id + this._getAllQuestions + "/" + this.id_quest, {headers: this.token_test})
  }
  AnswerGetAnswer(){
    console.log(this.token_test)
    return this.http.get<any>(this._testUrl + "/" + this.id + this._getAllQuestions + "/" + this.id_quest + this._putAnswer, {headers: this.token_test})
  }
  AnswerPutAnswer(data){
    console.log(data)
    return this.http.post<any>(this._testUrl + "/" + this.id + this._getAllQuestions + "/" + this.id_quest + this._putAnswer, data, {headers: this.token_test})
  }
  FinishAnswer(){
    console.log(this.token_test)
    return this.http.post<any>(this._testUrl + "/" + this.id + this._finish, this.body, {headers: this.token})
  }
}
