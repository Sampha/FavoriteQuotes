import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  author: string;
  text: string;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.author = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }


}
