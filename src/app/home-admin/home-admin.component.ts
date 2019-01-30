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
        },
        err => console.log(err)
      )

    this._homeAdminService.getListAllParAdm()
      .subscribe(
        res => {
          this.AllListPar = res
          console.log(this.AllListPar)
        },
        err => console.log(err)
      )

    this.ListDataVerif()
  }

  DetailUserProses(id){
    localStorage.removeItem("editParAdmId")
    localStorage.setItem("editParAdmId", id)
    this._router.navigate(["/DetailParAdmin"])
  }

  AddVerifAdm(){
    console.log('in AddVerifAdm')
    this._homeAdminService.AddVerifAdmData(this.DataVerif)
      .subscribe(
        res=>{
          this.ListDataVerif()
          console.log("Add Verif Success")
        },
        err=>console.log(err)
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
    this._homeAdminService.DeleteVerAdm(id)
      .subscribe(
        res => {
          this.ListDataVerif()
        },
        err => console.log(err)
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
