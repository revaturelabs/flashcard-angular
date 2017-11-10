import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { StudyModeComponent } from './study-mode/study-mode.component';
import { ApprovalComponent } from './approval/approval.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AppRoutingModule } from './/app-routing.module';

import { FlashcardService } from './flashcard.service';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryService } from './category.service';
import {UserService} from './user.service';
import {CookieService} from 'ng2-cookies';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    QuestionBankComponent,
    StudyModeComponent,
    ApprovalComponent,
    AddQuestionComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FlashcardService, CategoryService, UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
