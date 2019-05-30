import { Storage } from "@ionic/storage";

//pacote para transformar nossa classe em injetável
import { Injectable } from '@angular/core';

import { Usuario } from "../../model/Usuario";

//import do nosso model usuario.ts


@Injectable()
export class Session {

    constructor(public storage: Storage){

    }
    // setando uma seção e passando o tipo de usuário
    create(usuario: Usuario) {
        this.storage.set('usuario', usuario);
    }

    get(): Promise<any> {
        return this.storage.get('usuario');
    }

    // Quando deslogar deve remova do storage
    remove() {
        this.storage.remove('usuario');
    }

    exist() {
        this.get().then(res => {
            console.log('resultado >>> ', res);
            if(res) {
                console.log('resultado IF');
                return true;
            } else {
                console.log('resultado else');
                return false;
            }
        });
    }
}