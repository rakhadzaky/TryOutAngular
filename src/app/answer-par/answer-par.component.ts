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
  VarNumber = ''

  timeAlert : ''
  timeLeft: number = 60;
  interval;
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

    this.setNumber()

    this.GetListQuestions()

    this.GetListAnswer()

    this.GetQuestion()

    this.startTimer()

  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        if(this.timeLeft <= 20){
          this.timeAlert = "20 second left"
        }
      } else {
        this.FinishProses()
      }
    },1000)
  }

  setNumber(){
    let no = localStorage.getItem('number_quest')
    let number = parseInt(no)
    number = number + 1
    this.VarNumber = number.toString()
    console.log(this.VarNumber)
  }

  ChangeQuestion(id){
    localStorage.removeItem('number_quest')
    localStorage.setItem('number_quest', id)
    console.log(localStorage.getItem('number_quest'))
    this.setNumber()
    this.GetListQuestions()
    this.GetQuestion()
    this.GetListAnswer()
  }

  GetQuestion(){
    this._homeParcipantsService.AnswerGetQuestion(localStorage.getItem('number_quest'))
      .subscribe(
        res => {
          this.Question = res
          console.log(this.Question)
        },
        err => console.log(err)
      )
  }

  GetListAnswer(){
    this._homeParcipantsService.AnswerGetAnswer(localStorage.getItem('number_quest'))
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
    this._homeParcipantsService.AnswerPutAnswer(this.value, localStorage.getItem('number_quest'))
      .subscribe(
        res => {
          console.log(res)
          let number = localStorage.getItem('number_quest')
          let int_number = parseInt(number)
          int_number = int_number++
          number = int_number.toString()
          localStorage.removeItem('number_quest')
          localStorage.setItem('number_quest', number)
          this.GetListQuestions()
          this.GetQuestion()
          this.GetListAnswer()
        },
        err => console.log(err)
      )
  }

  FinishProses(){
    this._homeParcipantsService.FinishAnswer()
      .subscribe(
        res => {
          console.log(res)
          localStorage.removeItem('idTest')
          localStorage.removeItem('number_quest')
          localStorage.removeItem('token_start')
          // this._router.navigate(['/HomeParticipants'])
          window.location.href = '/HomeParticipants'
        },
        err => console.log(err)
      )
  }

}
