import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { StudyModeComponent } from './study-mode/study-mode.component';
import { ApprovalComponent } from './approval/approval.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AppRoutingModule } from './/app-routing.module';

import { FlashcardService } from './flashcard.service';
import { CategoryService } from './category.service';

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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FlashcardService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
