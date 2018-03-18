import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BinToHexPage } from "../bin-to-hex/bin-to-hex";
import { HexToBinPage } from "../hex-to-bin/hex-to-bin";

/**
 * Generated class for the ConverterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-converter',
  templateUrl: 'converter.html',
})
export class ConverterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToBinHex = () => {this.navCtrl.push(BinToHexPage)};
  goToHexBin = () => {this.navCtrl.push(HexToBinPage)};

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConverterPage');
  }

}
