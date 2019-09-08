import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sources = [];
  activeSource: string;
  filterText: string = '';

  updateNews(event) {
    this.activeSource = event.target.value;
    if (this.activeSource != 'All sources') {
      for (let i = 0; i < this.sources.length; i++) {
        if (this.sources[i].name === this.activeSource) {
          [...this.newsService.newsList] = this.sources[i].news;
        }
      }
    } else {
      while (this.newsService.newsList.length > 0) {
        this.newsService.newsList.pop();
      }
      for (let i = 0; i < this.sources.length; i++) {
        this.newsService.newsList.push(...this.sources[i].news);
      }
    }
  }

  filterNews() {
    let arr = [];
    arr = this.newsService.newsList.filter(item => {
      console.log(this.filterText);
      console.log(item.title.indexOf(this.filterText) !== -1);
      return item.title.indexOf(this.filterText) !== -1;
    });
    while (this.newsService.newsList.length > 0) {
      this.newsService.newsList.pop();
    }
    this.newsService.newsList.push(...arr);
  }

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.sources = this.newsService.getNews();
    this.activeSource = 'All sources';
    for (let i = 0; i < this.sources.length; i++) {
      this.newsService.newsList.push(...this.sources[i].news);
    }
  }
}
