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
    this._homeCommitteeService.AddDataQuetions(this.QuestionData)
      .subscribe(
        res => {
          console.log(res)
          this.GetAllDataQuestions()
          localStorage.removeItem('idQuestionsAns')
          let data = this.TableQuestions.length -1
          localStorage.setItem('idQuestionsAns', data.toString())
        },
        err => console.log(err)
      )
  }

  AddAnswerProses(){
    this._homeCommitteeService.AddDataAnswer(this.AnswerData)
      .subscribe(
        res => {
          console.log(res)
          this.GetAnswerData()
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
      this._homeCommitteeService.GetDataAnswerQuest()
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
    this.GetAnswerData()
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
    this._router.navigate(['/DetailQuestion'])
  }

}
