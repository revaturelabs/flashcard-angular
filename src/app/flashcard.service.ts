import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions, Headers} from '@angular/http';

import { Observable } from 'rxjs/observable';

import { of } from 'rxjs/observable/of';

import { Flashcard } from './flashcard';

const FLASHCARDS: Flashcard[] = [
  {id: 1, question: 'What is Angular', answer: 'IDK', category: 'Angular', status: 'Approved'},
  {id: 2, question: 'What is a directive', answer: 'IDK', category: 'Angular', status: 'Approved'},
  {id: 3, question: 'What is a directive', answer: 'IDK', category: 'JavaScript', status: 'Approved'},
  {id: 4, question: 'What is a directive', answer: 'IDK', category: 'Servlets', status: 'Approved'}
];

@Injectable()
export class FlashcardService {
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  getFlashcards(): Observable<Flashcard[]> {
    return of(FLASHCARDS);
  }
  getFlashcard(id: number): Observable<Flashcard> {
    return of(FLASHCARDS.find( flashcard => flashcard.id === id));
  }
  getFlashcardsByCategory(category: string): Observable<Flashcard[]> {
    return of(FLASHCARDS.filter( flashcard => flashcard.category === category ));
  }
  update(flashcard: Flashcard): Observable<Flashcard> {
    return of(flashcard);
  }
}
