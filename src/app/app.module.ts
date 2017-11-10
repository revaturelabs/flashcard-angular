import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { StudyModeComponent } from './study-mode/study-mode.component';
import { ApprovalComponent } from './approval/approval.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AppRoutingModule } from './/app-routing.module';

import { FlashcardService } from './flashcard.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionBankComponent,
    StudyModeComponent,
    ApprovalComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FlashcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
