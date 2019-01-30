import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCommitteeService } from '../home-committee.service';

@Component({
  selector: 'app-insert-test-com',
  templateUrl: './insert-test-com.component.html',
  styleUrls: ['./insert-test-com.component.css']
})
export class InsertTestComComponent implements OnInit {

  Identity = {}
  InsertValue = {}
  Date = ''
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
  }

  InsertTestProses(){
    this._homeCommitteeService.AddTestCom(this.InsertValue)
      .subscribe(
        res => {
          this.InsertValue = res
          console.log(this.InsertValue)
        },
        err => console.log(err)
      )
  }

}
