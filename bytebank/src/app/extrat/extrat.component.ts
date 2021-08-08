import { Component, OnInit, Input } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrat',
  templateUrl: './extrat.component.html',
  styleUrls: ['./extrat.component.scss'],
})
export class ExtratComponent implements OnInit {
  transferencias: any[];

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.transferencias = this.service.transferencias;
  }
}
