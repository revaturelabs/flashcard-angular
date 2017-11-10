import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddQuestionComponent } from './add-question/add-question.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/add-question',
    pathMatch: 'full'
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
