import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  sources: AngularFireList<any>;
  keysSources = [];
  source: any;
  activeSource: string;
  activeSourceName: string;
  filterText: string = '';
  newsList: any;
  constructor(private db: AngularFireDatabase) {
    this.sources = db.list('/sources');
  }

  ngOnInit() {
    this.sources = this.db.list('/sources', ref => ref.limitToFirst(11));
    this.sources.snapshotChanges().subscribe(tmp => {
      this.keysSources = tmp;
    });
    this.activeSource = 'All sources';
    this.activeSourceName = 'All sources';
    let tmp = '/news/';
    this.newsList = [];
    this.db
      .list(tmp)
      .snapshotChanges()
      .subscribe(tmp => {
        tmp.forEach((tmp: any) => {
          tmp.payload.val().forEach((item: any) => {
            this.newsList.push({
              text: item.text,
              title: item.title,
              image: item.image
            });
          });
        });
      });
  }

  updateNews(event) {
    this.activeSource = event.target.value;
    this.activeSourceName = event.target.selectedOptions[0].text;
    if (this.activeSource != 'All sources') {
      let tmp = '/news/' + this.activeSource;
      this.db
        .list(tmp)
        .snapshotChanges()
        .subscribe(tmp => {
          this.newsList = tmp.map((item: any) => {
            return {
              text: item.payload.val().text,
              title: item.payload.val().title,
              image: item.payload.val().image
            };
          });
        });
    } else {
      let tmp = '/news/';
      this.newsList = [];
      this.db
        .list(tmp)
        .snapshotChanges()
        .subscribe(tmp => {
          tmp.forEach((tmp: any) => {
            tmp.payload.val().forEach((item: any) => {
              this.newsList.push({
                text: item.text,
                title: item.title,
                image: item.image
              });
            });
          });
        });
    }
  }

  filterNews() {
    let arr = [];
    arr = this.newsList.filter(item => {
      return item.title.indexOf(this.filterText) !== -1;
    });
    this.newsList=[];
    this.newsList.push(...arr);
  }
}
