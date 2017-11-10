import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { FlashcardService } from '../flashcard.service';
import { CategoryService } from '../category.service';

import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionForm: FormGroup;

  private categories: string[];
  constructor(
    private flashcardService: FlashcardService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input() flashcard: Flashcard;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.flashcardService.getFlashcard(id)
        .subscribe(flashcard => this.flashcard = flashcard);
    } else {
      this.flashcard = { id: 0, question: '', answer: '', category: '', status: '' };
    }

    this.questionForm = new FormGroup({
      'category': new FormControl(this.flashcard.category,
        [
          Validators.required
        ]),
      'question': new FormControl(this.flashcard.question,
        [
          Validators.required
        ]),
      'answer': new FormControl(this.flashcard.answer,
        [
          Validators.required
        ]),
    });

    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.flashcardService.update(this.flashcard)
      .subscribe(() => this.goBack());
    console.log(this.flashcard);
  }

}
