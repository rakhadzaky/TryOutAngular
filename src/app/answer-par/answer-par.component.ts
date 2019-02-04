import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeParticipantsService } from '../home-participants.service';
import { formatDate } from '@angular/common';

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

  timeAlert = ''
  timeLeft: number = 0;
  timeLeftView: number[] = [0,0,0];
  interval;

  time = []
  time_end = []

  DateNow = new Date()
  TimeNow = []
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

      this._homeParcipantsService.getDetailTestPar()
        .subscribe(
          res => {
            this.time = res.time.split(" ")
            console.log(this.time[4])
            this.time_end = this.time[4].split(":")
            this.TimeNow = formatDate(this.DateNow, 'HH:mm:ss', 'en-US', '+0700').split(":")
            this.timeLeft = parseInt((parseInt(this.TimeNow[0])*3600) + (parseInt(this.TimeNow[1])*60) + parseInt(this.TimeNow[2]) - (parseInt(this.time_end[0])*3600) + (parseInt(this.time_end[1])*60) + parseInt(this.time_end[2]))
            this.timeLeftView[0] = Math.round(this.timeLeft / 3600)
            this.timeLeft = this.timeLeft % 3600
            this.timeLeftView[1] = Math.round(this.timeLeft / 60)
            this.timeLeft = this.timeLeft % 60
            this.timeLeftView[2] = Math.round(this.timeLeft)
            this.startTimer()
            console.log(this.TimeNow)
            console.log(this.time_end)
          },
          err => console.log(err)
        )

    this.setNumber()

    this.GetListQuestions()

    this.GetListAnswer()

    this.GetQuestion()

  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeftView[2] > 0) {
        this.timeLeftView[2]--
        if(this.timeLeftView[2] <= 20 && this.timeLeftView[1] == 0 && this.timeLeftView[0] == 0){
          this.timeAlert = "20 second left"
        }
      }else if(this.timeLeftView[1] > 0){
        this.timeLeftView[1]--
        this.timeLeftView[2] = 59
      }else if(this.timeLeftView[0] > 0){
        this.timeLeftView[0]--
        this.timeLeftView[1] = 59
        this.timeLeftView[2] = 59
      }else {
        window.alert("Times Up !!")
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
