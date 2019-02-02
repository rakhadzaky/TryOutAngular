import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeAdminService } from '../home-admin.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  Identity = []
  AllQuestions = []
  AllListCom = []
  AllListPar = []
  AllListVar = []
  // idVerif={}
  DataVerif={}

  res_verif = ''

  res_verif_delete = ''

  err_verif = ''
  err_verif_code = ''
  err_verif_end = ''
  err_verif_start = ''
  err_verif_status = ''

  err_verif_delete = ''

  // Pagination
  page_now_par = ''
  page_end_par = ''

  page_now_com = ''
  page_end_com = ''
  constructor(private _homeAdminService: HomeAdminService, private _router: Router) { }

  ngOnInit() {
    this._homeAdminService.getDetailAdmin()
      .subscribe(
        res => {
          this.Identity = res
          // console.log(this.Identity)
        },
        err => console.log(err)
      )

    this._homeAdminService.getListAllComAdm()
      .subscribe(
        res => {
          this.AllListCom = res
          console.log(this.AllListCom)
          this.page_now_com = res.meta.current_page
          this.page_end_com = res.meta.last_page
        },
        err => console.log(err)
      )

    this._homeAdminService.getListAllParAdm()
      .subscribe(
        res => {
          this.AllListPar = res
          console.log(this.AllListPar)
          this.page_now_par = res.meta.current_page
          this.page_end_par = res.meta.last_page
        },
        err => console.log(err)
      )

    this.ListDataVerif()
  }

  GetAllParListNext(id){
    let number = parseInt(id)
    number = number + 1
    this._homeAdminService.getParChangePage(number)
    .subscribe(
      res=>{
        this.AllListCom = res
        console.log(this.AllListPar)
        this.page_now_par = res.meta.current_page
        this.page_end_par = res.meta.last_page
      },
      err => console.log(err)
    )
  }

  GetAllParListPrev(id){
    let number = parseInt(id)
    number = number - 1
    this._homeAdminService.getParChangePage(number)
    .subscribe(
      res=>{
        this.AllListPar = res
        console.log(this.AllListPar)
        this.page_now_par = res.meta.current_page
        this.page_end_par = res.meta.last_page
      },
      err => console.log(err)
    )
  }

  GetAllComListNext(id){
    let number = parseInt(id)
    number = number + 1
    this._homeAdminService.getComChangePage(number)
    .subscribe(
      res=>{
        this.AllListCom = res
        console.log(this.AllListCom)
        this.page_now_com = res.meta.current_page
        this.page_end_com = res.meta.last_page
      },
      err => console.log(err)
    )
  }
  GetAllComListPrev(id){
    let number = parseInt(id)
    number = number - 1
    this._homeAdminService.getComChangePage(number)
    .subscribe(
      res=>{
        this.AllListCom = res
        console.log(this.AllListCom)
        this.page_now_com = res.meta.current_page
        this.page_end_com = res.meta.last_page
      },
      err => console.log(err)
    )
  }

  DetailUserProses(id){
    localStorage.removeItem("editParAdmId")
    localStorage.setItem("editParAdmId", id)
    this._router.navigate(["/DetailParAdmin"])
  }

  AddVerifAdm(){
    this.res_verif_delete = ''
    this.err_verif_delete = ''
    this.res_verif = ''
    this.err_verif = ''
    this.err_verif_code = ''
    this.err_verif_end = ''
    this.err_verif_start = ''
    this.err_verif_status = ''
    console.log('in AddVerifAdm')
    this._homeAdminService.AddVerifAdmData(this.DataVerif)
      .subscribe(
        res=>{
          this.ListDataVerif()
          console.log(res)
          this.res_verif = res.message
        },
        err=>{
          console.log(err)
          this.err_verif = err.error.message
          this.err_verif_code = err.error.errors.code
          this.err_verif_start = err.error.errors.start
          this.err_verif_end = err.error.errors.end
          this.err_verif_status = err.error.errors.status

        }
      )
  }

  ListDataVerif(){
    this._homeAdminService.getListAllVerAdm()
      .subscribe(
        res => {
          this.AllListVar = res
          console.log(this.AllListVar)
          // this.idVerif = this.AllListVar[this.AllListVar.length - 1].id + 1;
          // console.log(this.AllListVar[0].code)
        },
        err => console.log(err)
      )
  }

  DeleteDataVerifAdm(id){
    console.log(id)
    this.res_verif = ''
    this.err_verif = ''
    this.res_verif_delete = ''
    this.err_verif_delete = ''
    this._homeAdminService.DeleteVerAdm(id)
      .subscribe(
        res => {
          console.log(res)
          this.res_verif_delete = res.message
          this.ListDataVerif()
        },
        err => {
          console.log(err)
          this.err_verif_delete = err.error.message
        }
      )
  }

  LogoutUserProses(){
    this._homeAdminService.LogoutUser()
      // .subscribe(
      //   res => {
      //     console.log(res)
      //   },
      //   err => console.log(err)
      // )
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }

}
