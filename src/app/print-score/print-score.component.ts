import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCommitteeService } from '../home-committee.service';

@Component({
  selector: 'app-print-score',
  templateUrl: './print-score.component.html',
  styleUrls: ['./print-score.component.css']
})
export class PrintScoreComponent implements OnInit {

  constructor(private _homeCommitteeService: HomeCommitteeService, private _router: Router) { }

  ListPar = {}

  ngOnInit() {
    this._homeCommitteeService.getAllResultNoPage()
      .subscribe(
        res=>{
          this.ListPar = res
          console.log(this.ListPar)
        },
        err => console.log(err)
      )
      window.print()
  }

}
