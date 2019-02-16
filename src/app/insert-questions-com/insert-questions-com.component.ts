import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCommitteeService } from '../home-committee.service';

@Component({
  selector: 'app-insert-questions-com',
  templateUrl: './insert-questions-com.component.html',
  styleUrls: ['./insert-questions-com.component.css']
})
export class InsertQuestionsComComponent implements OnInit {

  TestData = {}
  Identity = {}
  QuestionData = {}
  TableQuestions = []
  AnswerData = {}
  AnswerRecord = []

  res_addQuest= ''

  err_addQuest= ''
  constructor(private _homeCommitteeService: HomeCommitteeService, private _router: Router) { }

  ngOnInit() {
    this._homeCommitteeService.getDetailAkunCom()
      .subscribe(
        res => {
          this.Identity = res
          console.log(this.Identity)
        },
        err => console.log(err)
      )
    this._homeCommitteeService.DetailTestCom()
      .subscribe(
        res =>
        {
          this.TestData = res
          console.log(this.TestData)
        },
        err => console.log(err)
      )
    this.GetAllDataQuestions()
    this.GetAnswerData()
    // console.log(localStorage.getItem('idQuestionsAns') == '')
    // console.log(localStorage.getItem('idQuestionsAns') != '')
  }

  AddQuestionProses(){
    this.res_addQuest = ''
    this.err_addQuest = ''
    this._homeCommitteeService.AddDataQuetions(this.QuestionData)
      .subscribe(
        res => {
          console.log(res)
          this.res_addQuest = res.message
          this.GetAllDataQuestions()
          if(localStorage.getItem('idQuestionsAns') !== null){
            localStorage.removeItem('idQuestionsAns')
          }
          let data = this.TableQuestions.length
          console.log(data)
          localStorage.setItem('idQuestionsAns', data.toString())
          this.QuestionData = {}
          this.AnswerRecord = []
        },
        err => {
          console.log(err)
          this.err_addQuest = err.error.errors.content[0]
        }
      )
  }

  AddAnswerProses(){
    console.log(localStorage.getItem('idQuestionsAns') + "in controller")
    this._homeCommitteeService.AddDataAnswer(this.AnswerData, localStorage.getItem('idQuestionsAns'))
      .subscribe(
        res => {
          console.log(res)
          this.GetAnswerData()
          this.GetAllDataQuestions()
          this.AnswerData = {}
        },
        err => console.log(err)
      )
  }

  GetAllDataQuestions(){
    this._homeCommitteeService.GetDataQuestions()
      .subscribe(
        res =>{
          this.TableQuestions = res
          console.log(this.TableQuestions)
        },
        err => console.log(err)
      )
  }

  GetAnswerData(){
    if (localStorage.getItem('idQuestionsAns') != ''){
      this._homeCommitteeService.GetDataAnswerQuest(localStorage.getItem('idQuestionsAns'))
        .subscribe(
          res => {
            this.AnswerRecord = res
            console.log(this.AnswerRecord)
          },
          err => console.log(err)
        )
    } else{
      console.log('jawaban empty')
    }
  }

  CleanidQuestionAns(){
    localStorage.removeItem('idQuestionsAns')
    this.AnswerRecord = []
    this.res_addQuest = ''
  }

  DeleteQuestionProses(id){
    this._homeCommitteeService.DeleteDataQuestion(id)
      .subscribe(
        res => {
          console.log(res)
          this.GetAllDataQuestions()
        },
        err => console.log(err)
      )
  }

  GetDetailQuestion(data){
    localStorage.removeItem('idQuestionsAns')
    localStorage.setItem('idQuestionsAns', data)
    // this._router.navigate(['/DetailQuestion'])
    window.location.href = "/DetailQuestion"
  }

  EditTestMenu(){
    window.location.href = '/EditTest'
  }

  BackToHome(){
    localStorage.removeItem('detailTest')
    // this._router.navigate(['/InsertQuestions'])
    window.location.href = '/HomeCommittee'
  }

  LogoutComProses(){
    this._homeCommitteeService.getLogoutComProses()
    localStorage.removeItem('token')
    // this._router.navigate(['/login'])
    window.location.href = '/loginCom'
  }

}
