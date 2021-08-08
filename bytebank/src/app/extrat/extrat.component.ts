import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrat',
  templateUrl: './extrat.component.html',
  styleUrls: ['./extrat.component.scss'],
})
export class ExtratComponent implements OnInit {
  @Input() transferencias: any[];

  constructor() {}

  ngOnInit(): void {}
}
