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

  array = []
  length = ''
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
          this.GetArray()
          localStorage.setItem('detailTest', this.length)
        },
        err => console.log(err)
      )
  }

  GetArray(){
    this._homeCommitteeService.getAllQuestions()
      .subscribe(
        res => {
          this.array = res
          this.length = this.array.length.toString()
        },
        err => console.log(err)
      )
  }

}
