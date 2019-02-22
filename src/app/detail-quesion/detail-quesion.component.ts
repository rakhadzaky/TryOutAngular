import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCommitteeService } from '../home-committee.service';

@Component({
  selector: 'app-detail-quesion',
  templateUrl: './detail-quesion.component.html',
  styleUrls: ['./detail-quesion.component.css']
})
export class DetailQuesionComponent implements OnInit {

  DataDetailQuest = {}
  Identity = {}
  QuestionDataQuest = ''
  AnswerData = {}
  AnswerRecord = []

  selectedImage:File = null;
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

    this.GetQuestions()
    this.GetAnswerRecord()
  }

  GetQuestions(){
    this._homeCommitteeService.GetDetailDataQuestion()
      .subscribe(
        res => {
          this.DataDetailQuest = res
          console.log(this.DataDetailQuest)
        },
        err => console.log(err)
      )
  }

  BackToQuestions(){
    localStorage.removeItem('idQuestionsAns')
    // this._router.navigate(['/InsertQuestions'])
    window.location.href = '/InsertQuestions'
  }

  GetAnswerRecord(){
    this._homeCommitteeService.GetDataAnswerQuest(localStorage.getItem('idQuestionsAns'))
      .subscribe(
        res => {
          this.AnswerRecord = res
          console.log(this.AnswerRecord)
        },
        err => console.log(err)
      )
  }

  onChangeImage(event){
    this.selectedImage = <File>event.target.files[0]
    console.log(this.selectedImage)
  }

  EditQuestionProses(){
    var fd = new FormData()
    console.log(this.selectedImage == null)
    if(this.selectedImage == null){
      console.log(this.QuestionDataQuest)
      fd.append('content', this.QuestionDataQuest)
    }else{
      console.log(this.selectedImage)
      console.log(this.QuestionDataQuest)
      fd.append('content', this.QuestionDataQuest)
      fd.append('image', this.selectedImage, this.selectedImage.name)
    }
    this._homeCommitteeService.PutDetailDataQuestion(fd)
      .subscribe(
        res => {
          console.log(res)
          this.GetQuestions()
        },
        err => console.log(err)
      )
  }

  DeleteAnswerProses(id){
    this._homeCommitteeService.DeleteDataAnswer(id)
      .subscribe(
        res => {
          console.log(res)
          this.GetQuestions()
          this.GetAnswerRecord()
        },
        err => {
          console.log(err)
          this.GetQuestions()
          this.GetAnswerRecord()
        }
      )
  }

  AddAnswerProses(){
    this._homeCommitteeService.AddDataAnswer(this.AnswerData, localStorage.getItem('idQuestionsAns'))
      .subscribe(
        res => {
          console.log(res)
          this.GetQuestions()
          this.GetAnswerRecord()
        },
        err => console.log(err)
      )
  }

  LogoutComProses(){
    this._homeCommitteeService.getLogoutComProses()
    localStorage.removeItem('token')
    localStorage.removeItem('idQuestionsAns')
    localStorage.removeItem('detailTest')
    // this._router.navigate(['/login'])
    window.location.href = '/loginCom'
  }

}
