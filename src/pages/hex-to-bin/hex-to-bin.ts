import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HexToBinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hex-to-bin',
  templateUrl: 'hex-to-bin.html',
})
export class HexToBinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public hexadecimalNumber;

  convertBases = () => {
    let decimal = parseInt(this.hexadecimalNumber, 16);
    while(this.hexadecimalNumber == null || this.hexadecimalNumber == "") {return ""};
    return decimal.toString(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HexToBinPage');
  }

}
