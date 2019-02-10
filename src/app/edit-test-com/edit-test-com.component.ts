import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCommitteeService } from '../home-committee.service';

@Component({
  selector: 'app-edit-test-com',
  templateUrl: './edit-test-com.component.html',
  styleUrls: ['./edit-test-com.component.css']
})
export class EditTestComComponent implements OnInit {

  constructor(private _router : Router, private _homeCommitteeService : HomeCommitteeService) { }

  InsertValue = {}
  Identity = {}

  // error variable
  err_message = ''
  err_empty_value = ''
  err_true_value = ''
  err_wrong_value = ''
  err_end = ''
  err_start = ''
  err_title = ''
  err_information = ''
  ngOnInit() {
    this._homeCommitteeService.getDetailAkunCom()
      .subscribe(
        res => {
          this.Identity = res
          console.log(this.Identity)
        },
        err => console.log(err)
      )

    this._homeCommitteeService.DetailTestCom()
      .subscribe(
        res =>
        {
          this.InsertValue = res
          console.log(this.InsertValue)
        },
        err => console.log(err)
      )
  }

  PutDataQuestionProses(){
    this._homeCommitteeService.PutDataQuestion(this.InsertValue)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err)
        }
      )
  }

}
