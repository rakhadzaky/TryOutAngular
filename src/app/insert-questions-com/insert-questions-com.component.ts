import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCommitteeService } from '../home-committee.service';

@Component({
  selector: 'app-insert-questions-com',
  templateUrl: './insert-questions-com.component.html',
  styleUrls: ['./insert-questions-com.component.css']
})
export class InsertQuestionsComComponent implements OnInit {

  TestData = {}
  Identity = {}
  QuestionData = ''
  TableQuestions = []
  // AnswerData = {}
  AnswerDataOption = ''
  AnswerDataStatus = ''
  AnswerRecord = []

  res_addQuest= ''

  err_addQuest= ''

  selectedImg:File = null
  selectedImgAnswer:File = null
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
    this._homeCommitteeService.DetailTestCom()
      .subscribe(
        res =>
        {
          this.TestData = res
          console.log(this.TestData)
        },
        err => console.log(err)
      )
    this.GetAllDataQuestions()
    this.GetAnswerData()
    // console.log(localStorage.getItem('idQuestionsAns') == '')
    // console.log(localStorage.getItem('idQuestionsAns') != '')
  }

  AddQuestionProses(){
    this.res_addQuest = ''
    this.err_addQuest = ''
    var fd = new FormData()
    if(this.selectedImg == null){
      fd.append('content', this.QuestionData)
    }else{
      fd.append('content', this.QuestionData)
      fd.append('image', this.selectedImg, this.selectedImg.name)
    }
    this._homeCommitteeService.AddDataQuetions(fd)
      .subscribe(
        res => {
          console.log(res)
          this.res_addQuest = res.message
          this.GetAllDataQuestions()
          if(localStorage.getItem('idQuestionsAns') !== null){
            localStorage.removeItem('idQuestionsAns')
          }6
          let data = this.TableQuestions.length
          console.log(data)
          localStorage.setItem('idQuestionsAns', data.toString())
          this.QuestionData = ''
          this.AnswerRecord = []
        },
        err => {
          console.log(err)
          this.err_addQuest = err.error.errors.content[0]
        }
      )
  }

  OnChangeFile(event){
    this.selectedImg = <File>event.target.files[0]
    console.log(event)
  }

  OnChangeFileAnswer(event){
    this.selectedImgAnswer = <File>event.target.files[0]
    console.log(event)
  }
  
  AddAnswerProses(){
    console.log(localStorage.getItem('idQuestionsAns') + "in controller")
    var AnswerData = new FormData()
    if(this.selectedImgAnswer == null){
      AnswerData.append('option', this.AnswerDataOption)
      AnswerData.append('status', this.AnswerDataStatus)
    }else{
      AnswerData.append('option', this.AnswerDataOption)
      AnswerData.append('status', this.AnswerDataStatus)
      AnswerData.append('image', this.selectedImgAnswer, this.selectedImgAnswer.name)
    }      
    this._homeCommitteeService.AddDataAnswer(AnswerData, localStorage.getItem('idQuestionsAns'))
      .subscribe(
        res => {
          console.log(res)
          this.GetAnswerData()
          this.GetAllDataQuestions()
          // AnswerData = {}
          this.AnswerDataOption = ''
          this.AnswerDataStatus = ''
        },
        err => console.log(err)
      )
  }

  GetAllDataQuestions(){
    this._homeCommitteeService.GetDataQuestions()
      .subscribe(
        res =>{
          this.TableQuestions = res
          console.log(this.TableQuestions)
        },
        err => console.log(err)
      )
  }

  GetAnswerData(){
    if (localStorage.getItem('idQuestionsAns') != ''){
      this._homeCommitteeService.GetDataAnswerQuest(localStorage.getItem('idQuestionsAns'))
        .subscribe(
          res => {
            this.AnswerRecord = res
            console.log(this.AnswerRecord)
          },
          err => console.log(err)
        )
    } else{
      console.log('jawaban empty')
    }
  }

  CleanidQuestionAns(){
    localStorage.removeItem('idQuestionsAns')
    this.AnswerRecord = []
    this.res_addQuest = ''
  }

  DeleteQuestionProses(id){
    this._homeCommitteeService.DeleteDataQuestion(id)
      .subscribe(
        res => {
          console.log(res)
          this.GetAllDataQuestions()
        },
        err => console.log(err)
      )
  }

  GetDetailQuestion(data){
    localStorage.removeItem('idQuestionsAns')
    localStorage.setItem('idQuestionsAns', data)
    // this._router.navigate(['/DetailQuestion'])
    window.location.href = "/DetailQuestion"
  }

  EditTestMenu(){
    window.location.href = '/EditTest'
  }

  BackToHome(){
    localStorage.removeItem('detailTest')
    // this._router.navigate(['/InsertQuestions'])
    window.location.href = '/HomeCommittee'
  }

  LogoutComProses(){
    this._homeCommitteeService.getLogoutComProses()
    localStorage.removeItem('token')
    // this._router.navigate(['/login'])
    window.location.href = '/loginCom'
  }

}
