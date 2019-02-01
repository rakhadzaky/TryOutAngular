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

  // error variable
  err_message = ''
  err_empty_value = ''
  err_true_value = ''
  err_wrong_value = ''
  err_end = ''
  err_start = ''
  err_title = ''
  err_information = ''
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
          window.location.href = '/HomeCommittee'
        },
        err => {
          console.log(err)
          this.err_message = err.error.message
          this.err_end = err.error.errors.end
          this.err_start = err.error.errors.start
          this.err_title = err.error.errors.title
          this.err_true_value = err.error.errors.true_value
          this.err_empty_value = err.error.errors.empty_value
          this.err_wrong_value = err.error.errors.wrong_value
          this.err_information = err.error.errors.information
        }
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
