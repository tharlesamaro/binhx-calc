import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the BinToHexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-bin-to-hex',
    templateUrl: 'bin-to-hex.html',
})
export class BinToHexPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    public binaryNumber;

    convertBases = () => {
        let decimal = parseInt(this.binaryNumber, 2);
        while(this.binaryNumber == null || this.binaryNumber == "") {return ""};
        return decimal.toString(16);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BinToHexPage');
    }
}
