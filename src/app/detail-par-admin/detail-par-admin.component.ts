import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeAdminService } from '../home-admin.service';

@Component({
  selector: 'app-detail-par-admin',
  templateUrl: './detail-par-admin.component.html',
  styleUrls: ['./detail-par-admin.component.css']
})
export class DetailParAdminComponent implements OnInit {

  DetailParData = {}
  Identity = {}
  constructor(private _homeAdminService : HomeAdminService, private _router : Router) { }

  ngOnInit() {
    this._homeAdminService.getDetailAdmin()
      .subscribe(
        res => {
          this.Identity = res
          // console.log(this.Identity)
        },
        err => console.log(err)
      )

    this._homeAdminService.getDetailParAdm()
     .subscribe(
       res => {
         this.DetailParData = res
         console.log(this.DetailParData)
       },
       err => console.log(err)
     )
  }

  BackHome(){
    this._router.navigate(['/HomeAdmin'])
  }

}
