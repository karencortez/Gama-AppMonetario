import { Component, OnInit } from '@angular/core';

import { Transacao } from './extrato.interface';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Transacao[] = [];

  constructor(
    private extratoService: ExtratoService,
  ) { }

  ngOnInit() {
    this.carregarExtrato()
  }

  carregarExtrato() {
    this.extratoService.getTransacoes()
    .subscribe(
      response => this.onSuccesso(response),
      error => this.onError(error),
    );
    }

    onSuccesso(response: Transacao[]){
      this.transacoes = response;
    }

    onError(error:any){
      console.error(error);
    }

}
