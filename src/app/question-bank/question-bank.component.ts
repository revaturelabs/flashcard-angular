import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { FlashcardService } from '../flashcard.service';
import { CategoryService } from '../category.service';

import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']
})
export class QuestionBankComponent implements OnInit {
  private categories: string[];
  private openCategory: string;

  constructor(
    private flashcardService: FlashcardService,
    private categoryService: CategoryService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  getFlashcardsByCategory(category): Flashcard[] {
    console.log('category: ' + category);
    let tempCards: Flashcard[];
    this.flashcardService.getFlashcardsByCategory(category)
    .subscribe( flashcards => tempCards = flashcards );
    return tempCards;
  }

  onSelect(fc: Flashcard): void {
    this.router.navigate(['/add-question', fc.id]);
  }

  open(category): void {
    this.openCategory = category;
  }

  isOpen(category): boolean {
    console.log(category);
    console.log(this.openCategory);
    console.log(this.openCategory === category);
    return this.openCategory === category;
  }

}
