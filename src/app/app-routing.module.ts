import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/add-question',
    pathMatch: 'full'
  },
  {
    path: 'question-bank',
    component: QuestionBankComponent
  },
  {
    path: 'add-question/:id',
    component: AddQuestionComponent
  },
  {
    path: 'add-question',
    component: AddQuestionComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
