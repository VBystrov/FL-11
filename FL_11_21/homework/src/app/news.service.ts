import { Injectable } from '@angular/core';
import { SOURCES } from './header/mock-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsList: { title: string; text: string }[] = [];
  getNews() {
    return SOURCES;
  }

  constructor() {}
}
