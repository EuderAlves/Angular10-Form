import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransfenciaComponent {
  valor: number;
  destino: number;
  transferir() {
    console.log('Solicitar nova transferencia');
    console.log('Valor:', this.valor);
    console.log('Destino:', this.destino);
  }
}
