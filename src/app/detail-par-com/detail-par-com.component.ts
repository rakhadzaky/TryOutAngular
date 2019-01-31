import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCommitteeService } from '../home-committee.service';

@Component({
  selector: 'app-detail-par-com',
  templateUrl: './detail-par-com.component.html',
  styleUrls: ['./detail-par-com.component.css']
})
export class DetailParComComponent implements OnInit {

  Identity = {}
  DetailParData = {}
  constructor(private _router: Router, private _homeCommitteeService: HomeCommitteeService) { }

  ngOnInit() {
    this._homeCommitteeService.getDetailAkunCom()
      .subscribe(
        res => {
          this.Identity = res
          console.log(this.Identity)
        },
        err => console.log(err)
      )

    this._homeCommitteeService.getDetailPar(localStorage.getItem('idDetail'))
      .subscribe(
        res => {
          this.DetailParData = res
          console.log(this.DetailParData)
        },
        err => console.log(err)
      )
  }

  BackToList(){
    localStorage.removeItem('idDetail')
    this._router.navigate(['/HomeCommittee'])
  }

}
