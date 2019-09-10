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
  countSources: number = 0;
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
      this.countSources = tmp.length;
      console.log(this.keysSources);
    });
  }

  updateNews(event) {
    this.activeSource = event.target.value;
    this.activeSourceName = event.target.selectedOptions[0].text;
    console.log(event.target);
    console.log(event.target.selectedOptions);
    console.log(this.activeSource);
    if (this.activeSource != 'All sources') {
      let tmp = '/news/' + this.activeSource;
      this.db
        .list(tmp)
        .snapshotChanges()
        .subscribe(tmp => {
          this.newsList = tmp;
          this.countSources = tmp.length;
          console.log(this.keysSources);
        });
    }
  }
}
