import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Transacao } from './extrato.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor( 
    private http: HttpClient,
  ) { }

  getTransacoes() {
    var teste = this.http.get<Transacao[]>(this.API_URL + '/contas')
    console.log(teste);
    return teste
    // console.log(this.http.get<Transacao[]>(this.API_URL + '/contas'));
    // return this.http.get<Transacao[]>(this.API_URL + '/contas');
  }
}
