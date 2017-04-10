import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Favorites } from '../favorites/favorites';
import { Library } from '../library/library';

@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="bookmark"></ion-tab>

    </ion-tabs>
`
})

export class Tabs {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  favoritesPage = Favorites;
  libraryPage = Library;

}
