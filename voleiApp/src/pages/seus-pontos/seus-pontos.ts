import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

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
  idUser: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, public storage: Storage, public http: HttpClient) {
    this.getStorage().then(res => {
      if (res) {
        // console.log('resultado IF', res.id);
        this.idUser = res.id;
      }
      else {
       console.log("error 1")
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeusPontosPage');
    // Optionally request the permission early

  }

  getStorage(): Promise<any> {
    return this.storage.get('usuario');
  }

  openScanner() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.sendQrcodeRequest();
    }).catch(err => {
      console.log('Error', err);
    });
  }


  sendQrcodeRequest() {
    let url = "http://maestro.lucasduarte.club/api/torcedor/pontuar/1/" + this.idUser;
    let headers = new Headers().set('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.put(url, headers)
      .toPromise()
      .then((response) =>
      {
       alert("Pontuação adicionada com sucesso!");
      })
      .catch((error) =>
      {
        console.error('Deu ruim : ', error.status);
        console.error('API QRCode Error : ', JSON.stringify(error));
        alert("A pontuação para o torcedor não está ativa, não é sócio ou já pontuou hoje.");
        // reject(error.json());
      });
    });
  }
}
