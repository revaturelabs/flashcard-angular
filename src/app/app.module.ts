import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { StudyModeComponent } from './study-mode/study-mode.component';
import { ApprovalComponent } from './approval/approval.component';
import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionBankComponent,
    StudyModeComponent,
    ApprovalComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
