import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeParticipantsService } from '../home-participants.service';

@Component({
  selector: 'app-info-question-par',
  templateUrl: './info-question-par.component.html',
  styleUrls: ['./info-question-par.component.css']
})
export class InfoQuestionParComponent implements OnInit {

  infoTest = {}
  Identity = {}
  verif = {}
  err_start = ''
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

}
