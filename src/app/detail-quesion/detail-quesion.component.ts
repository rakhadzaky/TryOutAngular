import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCommitteeService } from '../home-committee.service';

@Component({
  selector: 'app-detail-quesion',
  templateUrl: './detail-quesion.component.html',
  styleUrls: ['./detail-quesion.component.css']
})
export class DetailQuesionComponent implements OnInit {

  DataDetailQuest = {}
  Identity = {}
  QuestionData = {}
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

    this.GetQuestions()
    this.GetAnswerRecord()
  }

  GetQuestions(){
    this._homeCommitteeService.GetDetailDataQuestion()
      .subscribe(
        res => {
          this.DataDetailQuest = res
          console.log(this.DataDetailQuest)
        },
        err => console.log(err)
      )
  }

  BackToQuestions(){
    localStorage.removeItem('idQuestionsAns')
    this._router.navigate(['/InsertQuestions'])
  }

  GetAnswerRecord(){
    this._homeCommitteeService.GetDataAnswerQuest()
      .subscribe(
        res => {
          this.AnswerRecord = res
          console.log(this.AnswerRecord)
        },
        err => console.log(err)
      )
  }

  EditQuestionProses(){
    this._homeCommitteeService.PutDetailDataQuestion(this.QuestionData)
      .subscribe(
        res => {
          console.log(res)
          this.GetQuestions()
        },
        err => console.log(err)
      )
  }

  DeleteAnswerProses(id){
    this._homeCommitteeService.DeleteDataAnswer(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
