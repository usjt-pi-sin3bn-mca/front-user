import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the SeusPontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seus-pontos',
  templateUrl: 'seus-pontos.html',
})
export class SeusPontosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeusPontosPage');
    // Optionally request the permission early

  }


  openScanner() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      let resultado = JSON.stringify(barcodeData);
      alert("Resultado do scan: " + barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
