import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NewsComponent } from './news/news.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDbOBGQCLiebX92KZrWGwIEGbNOcnd_qmI',
  authDomain: 'angular-27209.firebaseapp.com',
  databaseURL: 'https://angular-27209.firebaseio.com',
  projectId: 'angular-27209',
  storageBucket: 'angular-27209.appspot.com',
  messagingSenderId: '170659798325',
  appId: '1:170659798325:web:20fcf42476ffce5423407c'
};

@NgModule({
  declarations: [AppComponent, NewsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
