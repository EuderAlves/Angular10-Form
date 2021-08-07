import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrat',
  templateUrl: './extrat.component.html',
  styleUrls: ['./extrat.component.scss'],
})
export class ExtratComponent implements OnInit {
  @Input() transferencia: any;

  constructor() {}

  ngOnInit(): void {}
}
