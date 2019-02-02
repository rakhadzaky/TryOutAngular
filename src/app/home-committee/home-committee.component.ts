import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCommitteeService } from '../home-committee.service';

@Component({
  selector: 'app-home-committee',
  templateUrl: './home-committee.component.html',
  styleUrls: ['./home-committee.component.css']
})
export class HomeCommitteeComponent implements OnInit {


  Identity = {}
  ListQuestions = []
  ListPar = []
  ListResult = []

  res_delete = ''
  err_delete = ''
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

    this.GetAllQuestions()

    this._homeCommitteeService.getAllPar()
      .subscribe(
        res=>{
          this.ListPar = res
          console.log(this.ListPar)
        },
        err => console.log(err)
      )
      this._homeCommitteeService.getAllResult()
      .subscribe(
        res=>{
          this.ListResult = res
          console.log(this.ListResult)
        },
        err => console.log(err)
      )
  }

  GetAllQuestions(){
    this._homeCommitteeService.getAllQuestions()
      .subscribe(
        res => {
          this.ListQuestions = res
          console.log(this.ListQuestions)
        },
        err => console.log(err)
      )
  }

  DetailTestCom(id){
    console.log(id)
    localStorage.removeItem('detailTest')
    localStorage.setItem('detailTest', id)
    // this._router.navigate(['/InsertQuestions'])
    window.location.href = '/InsertQuestions'
  }

  DeleteTestProses(id){
    this._homeCommitteeService.DeleteTestCom(id)
      .subscribe(
        res => {
          console.log(res)
          this.GetAllQuestions()
          // this.res_delete = res.message
        },
        err => {
          console.log(err)
          this.GetAllQuestions()
          // this.err_delete = err.error.message
        }
      )
  }

  DetailParCom(id){
    console.log(id)
    localStorage.removeItem('idDetail')
    localStorage.setItem('idDetail', id)
    this._router.navigate(['/DetailParticipants'])
  }

  LogoutComProses(){
    this._homeCommitteeService.getLogoutComProses()
    localStorage.removeItem('token')
    // this._router.navigate(['/login'])
    window.location.href = '/login'
  }

}
