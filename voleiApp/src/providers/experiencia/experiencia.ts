import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ExperienciaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExperienciaProvider  {
  private baseApiPath = 'http://rock.lucasduarte.club/maestro/api/';
  
  data: any;
  headers: any;
 
    
  constructor(public http: HttpClient, public toastController: ToastController) {
      
  }
  getExperiencia() {
    let url = this.baseApiPath + 'experiencia/';

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(url)
        .map(res => res)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        },
        (error) => {
          console.log("Erro no provider Experiencia");
        });
    });

  }

}
