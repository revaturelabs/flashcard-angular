import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { FlashcardService } from '../flashcard.service';

import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(
    private flashcardService: FlashcardService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  }

}
