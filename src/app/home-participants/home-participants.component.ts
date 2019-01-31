import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeParticipantsService } from '../home-participants.service';

@Component({
  selector: 'app-home-participants',
  templateUrl: './home-participants.component.html',
  styleUrls: ['./home-participants.component.css']
})
export class HomeParticipantsComponent implements OnInit {

  AllTest = []
  Identity = {}
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

    this._homeParcipantsService.getAllQuestions()
      .subscribe(
        res => {
          this.AllTest = res
          console.log(this.AllTest)
        },
        err => console.log(err)
      )
  }

  DetailTestProses(id){
    localStorage.removeItem('idTest')
    localStorage.setItem('idTest', id)
    console.log(id)
    this._router.navigate(['/InfoQuestion'])
  }

  LogoutParProses(){
    this._homeParcipantsService.getLogoutParProses()
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

}
