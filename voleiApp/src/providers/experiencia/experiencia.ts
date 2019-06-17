import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { UsuarioLogado } from '../../model/UsuarioLogado';

/*
  Generated class for the ExperienciaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExperienciaProvider  {
  // private baseApiPath = 'http://rock.lucasduarte.club/maestro/api/';
  private baseApiPath = 'http://maestro.lucasduarte.club/api/';
  
  data: any;
  headers: any;
  
 
    
  constructor(public http: HttpClient, public toastController: ToastController) {
      
  }
  async sucesso() {
    const toast = await this.toastController.create({
      message: "Experiência Adquirida!!",
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
  async erro() {
    const toast = await this.toastController.create({
      message: "Pontos insuficientes!!",
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  getExperiencia() {
    let url = this.baseApiPath + 'experiencia/';

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
  adquirirExperiencia(id_experiencia) {
            
    console.log( );
    
    return new Promise(
          result => {
                this.http.put(this.baseApiPath + 'experiencia/adquirir/'+id_experiencia+"/"+UsuarioLogado.getInstance().getUsuario().id,{
                      headers: new HttpHeaders().set('Content-Type', 'application/json')
                })
                      .subscribe(data => {
                            console.log(data);
                            this.sucesso();
                            
                      
                      }, (error) => {
                            console.log(error);
                            this.erro();
                      
                      });
          }
    );
}

}
