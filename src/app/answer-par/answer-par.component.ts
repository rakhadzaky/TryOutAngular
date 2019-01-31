import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeParticipantsService } from '../home-participants.service';

@Component({
  selector: 'app-answer-par',
  templateUrl: './answer-par.component.html',
  styleUrls: ['./answer-par.component.css']
})
export class AnswerParComponent implements OnInit {

  Identity = {}
  ListQuestion = []
  Question = {}
  value = {}
  ListAnswer = []
  constructor(private _router: Router, private _homeParcipantsService : HomeParticipantsService) { }

  ngOnInit() {
    this._homeParcipantsService.getDetailPar()
      .subscribe(
        res => {
          this.Identity = res
          console.log(this.Identity)
        },
        err => console.log(err)
      )

    this.GetListQuestions()

    this.GetListAnswer()

    this.GetQuestion()

  }

  GetQuestion(){
    this._homeParcipantsService.AnswerGetQuestion()
      .subscribe(
        res => {
          this.Question = res
          console.log(this.Question)
        },
        err => console.log(err)
      )
  }

  GetListAnswer(){
    this._homeParcipantsService.AnswerGetAnswer()
      .subscribe(
        res => {
          this.ListAnswer = res
          console.log(this.ListAnswer)
        },
        err => console.log(err)
      )
  }

  GetListQuestions(){
    this._homeParcipantsService.AnswerGetAllQuestions()
      .subscribe(
        res => {
          this.ListQuestion = res
          console.log(this.ListQuestion)
        },
        err => console.log(err)
      )
  }

  PutAnswerProses(){
    this._homeParcipantsService.AnswerPutAnswer(this.value)
      .subscribe(
        res => {
          console.log(res)
          let number = localStorage.getItem('number_quest')
          number = number + 1
          localStorage.removeItem('number_quest')
          localStorage.setItem('number_quest', number)
          this.GetListQuestions()
          this.GetQuestion()
          this.GetListAnswer()
        },
        err => console.log(err)
      )
  }

  ChangeQuestion(id){
    localStorage.removeItem('number_quest')
    localStorage.setItem('number_quest', id)
    this.GetListQuestions()
    this.GetQuestion()
    this.GetListAnswer()
  }

  FinishProses(){
    this._homeParcipantsService.FinishAnswer()
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/HomeParticipants'])
        },
        err => console.log(err)
      )
  }

}
