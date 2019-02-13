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

  // pagination
  page_now = ''
  page_end = ''

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
    this.GetAllParList()
  }

  GetAllParList(){
    this._homeCommitteeService.getAllPar()
      .subscribe(
        res=>{
          this.ListPar = res
          console.log(this.ListPar)
          this.page_now = res.meta.current_page
          this.page_end = res.meta.last_page
        },
        err => console.log(err)
      )
  }

  GetAllParListNext(id){
    let number = parseInt(id)
    number = number + 1
    this._homeCommitteeService.getParChangePage(number)
      .subscribe(
        res=>{
          this.ListPar = res
          console.log(this.ListPar)
          this.page_now = res.meta.current_page
          this.page_end = res.meta.last_page
        },
        err => console.log(err)
      )
  }

  GetAllParListPrev(id){
    let number = parseInt(id)
    number = number - 1
    this._homeCommitteeService.getParChangePage(number)
      .subscribe(
        res=>{
          this.ListPar = res
          console.log(this.ListPar)
          this.page_now = res.meta.current_page
          this.page_end = res.meta.last_page
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
    window.location.href = '/loginCom'
  }

}
