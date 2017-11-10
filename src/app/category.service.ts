import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { of } from 'rxjs/observable/of';

const CATEGORIES: string[] = [
  'Java',
  'Angular',
  'Servlets',
  'JavaScript',
  'Spring',
  'SQL',
  'MicroServices'
];

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Observable<string[]> {
    return of(CATEGORIES);
  }

}
