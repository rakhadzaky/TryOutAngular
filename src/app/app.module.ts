import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HomeAdminService } from './home-admin.service';
import { HomeCommitteeService} from './home-committee.service';
import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DetailParAdminComponent } from './detail-par-admin/detail-par-admin.component';
import { LoginCommitteeComponent } from './login-committee/login-committee.component';
import { HomeCommitteeComponent } from './home-committee/home-committee.component';
import { InsertTestComComponent } from './insert-test-com/insert-test-com.component';
import { LoginParticipantsComponent } from './login-participants/login-participants.component';
import { HomeParticipantsComponent } from './home-participants/home-participants.component';
import { InsertQuestionsComComponent } from './insert-questions-com/insert-questions-com.component';
import { DetailQuesionComponent } from './detail-quesion/detail-quesion.component';
import { InfoQuestionParComponent } from './info-question-par/info-question-par.component';
import { AnswerParComponent } from './answer-par/answer-par.component';
import { DetailParComComponent } from './detail-par-com/detail-par-com.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAdminComponent,
    DetailParAdminComponent,
    LoginCommitteeComponent,
    HomeCommitteeComponent,
    InsertTestComComponent,
    LoginParticipantsComponent,
    HomeParticipantsComponent,
    InsertQuestionsComComponent,
    DetailQuesionComponent,
    InfoQuestionParComponent,
    AnswerParComponent,
    DetailParComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, HomeAdminService, HomeCommitteeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
