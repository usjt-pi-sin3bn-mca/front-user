import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ConvenioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConvenioProvider  {
  private baseApiPath = 'http://localhost:8080/api/';
  public apiResult: any;
 
  data: any;
  headers: any;
 
    
  constructor(public http: HttpClient, public toastController: ToastController) {
      
  }
  getAllConvenios() {
    let url = this.baseApiPath + 'convenio/';

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
          console.log("Erro no provider de partidas");
        });
    });

  }
    cadastrarConvenio(convenio) {
      return new Promise(
            result => {
                  this.http.post(this.baseApiPath + 'convenio/', convenio,{
                        headers: new HttpHeaders().set('Content-Type', 'application/json')
                  })
                        .subscribe(data => {
                              console.log(data);
                              
                        }, (error) => {
                              console.log(error);
                        });
            }
      );
    }
    getConvenio(id) {
      let url = this.baseApiPath + 'convenio/'+id;
  
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
            console.log("Erro no provider Convenio");
          });
      });
  
    }
    alterarConvenio(id, body) {
      return new Promise((resolve, reject) => {
        this.http.put(this.baseApiPath + 'convenio/' + id, body)
        .toPromise()
        .then((response) =>
        {
          // console.log(response.json());
          // resolve(response.json());
        })
        .catch((error) =>
        {
          console.error('Deu ruim : ', error.status);
          console.error('API Convenio Error : ', JSON.stringify(error));
          // reject(error.json());
        });
      });
    }
    deletarConvenio(id) {
      return new Promise((resolve, reject) => {
        this.http.delete(this.baseApiPath + 'convenio/' + id)
        .toPromise()
        .then((response) =>
        {
          // console.log(response.json());
          // // resolve(response.json());
        })
        .catch((error) =>
        {
          console.error('Deu ruim : ', error.status);
          console.error('API Convenio Error : ', JSON.stringify(error));
          // reject(error.json());
        });
      });
    }
  

}
