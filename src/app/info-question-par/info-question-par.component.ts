import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeParticipantsService } from '../home-participants.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-info-question-par',
  templateUrl: './info-question-par.component.html',
  styleUrls: ['./info-question-par.component.css'],
})
export class InfoQuestionParComponent implements OnInit {

  infoTest = {}
  Identity = {}
  verif = {}
  err_start = ''

  time = []
  time_end = []

  DateNow = new Date()
  TimeNow = []
  constructor(private _router : Router, private _homeParcipantsService : HomeParticipantsService) { }

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
          this.infoTest = res
          console.log(this.infoTest)
          this.time = res.time.split(" ")
          console.log(this.time[4])
          this.time_end = this.time[4].split(":")
          this.TimeNow = formatDate(this.DateNow, 'HH:mm:ss', 'en-US', '+0700').split(":")
          console.log(this.TimeNow)
          console.log((parseInt(this.TimeNow[0])*3600) + (parseInt(this.TimeNow[1])*60) + parseInt(this.TimeNow[2]) - (parseInt(this.time_end[0])*3600) + (parseInt(this.time_end[1])*60) + parseInt(this.time_end[2]))
          console.log(this.time_end)
          console.log(this.TimeNow[2] - this.time_end[2])
        },
        err => console.log(err)
      )
  }

  BackToList(){
    localStorage.removeItem('idTest')
    // this._router.navigate(['/HomeParticipants'])
    window.location.href = '/HomeParticipants'
  }

  StartTestProses(){
    this.err_start = ''
    console.log(this.verif)
    this._homeParcipantsService.startTestPar(this.verif)
      .subscribe(
        res => {
          localStorage.setItem('token_start', res.token)
          localStorage.setItem('number_quest', '0')
          // this._router.navigate(['/AnswerTime'])
          window.location.href = 'AnswerTime'
        },
        err => {
          console.log(err)
          this.err_start = err.error.message
          this.err_start = err.error.erros.code
        }
      )
  }

  StartOffTestProses(){
    this.err_start = ''
    console.log(this.verif)
    this._homeParcipantsService.startOffTestPar(this.verif)
      .subscribe(
        res => {
          localStorage.setItem('token_start', res.token)
          localStorage.setItem('number_quest', '0')
          // this._router.navigate(['/AnswerTime'])
          if(localStorage.getItem('answer') === null){
              localStorage.setItem('answer', JSON.stringify(res.data))
          }
          window.location.href = 'AnswerTime'
        },
        err => {
          console.log(err)
          this.err_start = err.error.message
          this.err_start = err.error.erros.code
        }
      )
  }
  LogoutParProses(){
    this._homeParcipantsService.getLogoutParProses()
    localStorage.removeItem('token')
    localStorage.removeItem('idTest')
    // this._router.navigate(['/login'])
    window.location.href = "/login"
  }

}
