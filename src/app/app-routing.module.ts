import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DetailParAdminComponent } from './detail-par-admin/detail-par-admin.component';

import { LoginCommitteeComponent } from './login-committee/login-committee.component';
import { HomeCommitteeComponent } from './home-committee/home-committee.component';
import { InsertTestComComponent } from './insert-test-com/insert-test-com.component';
import { InsertQuestionsComComponent } from './insert-questions-com/insert-questions-com.component';
import { DetailQuesionComponent } from './detail-quesion/detail-quesion.component';
import { DetailParComComponent } from './detail-par-com/detail-par-com.component';
import { EditTestComComponent } from './edit-test-com/edit-test-com.component';

import { LoginParticipantsComponent } from './login-participants/login-participants.component';
import { HomeParticipantsComponent } from './home-participants/home-participants.component';
import { InfoQuestionParComponent } from './info-question-par/info-question-par.component';
import { AnswerParComponent } from './answer-par/answer-par.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo : '/login',
    pathMatch: 'full'
  },
  // ADMIN
  {
    path: 'loginAdm',
    component: LoginComponent
  },
  {
    path: 'HomeAdmin',
    component: HomeAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'DetailParAdmin',
    component: DetailParAdminComponent,
    canActivate: [AuthGuard]
  },
  // COMMITTEE
  {
    path: 'loginCom',
    component:LoginCommitteeComponent
  },
  {
    path: 'HomeCommittee',
    component: HomeCommitteeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'InsertTest',
    component:InsertTestComComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'InsertQuestions',
    component:InsertQuestionsComComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'DetailQuestion',
    component: DetailQuesionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'DetailParticipants',
    component: DetailParComComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'EditTest',
    component: EditTestComComponent,
    canActivate: [AuthGuard]
  },
  // PARTICIPANTS
  {
    path: 'login',
    component: LoginParticipantsComponent
  },
  {
    path: 'HomeParticipants',
    component: HomeParticipantsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'InfoQuestion',
    component: InfoQuestionParComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AnswerTime',
    component: AnswerParComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
