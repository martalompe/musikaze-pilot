import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-complex',
  templateUrl: './table-complex.component.html',
  styleUrls: ['./table-complex.component.scss'],
  standalone: false,
})
export class TableComplexComponent implements OnInit {
  @Input() data: any = {};
  constructor() {}

  ngOnInit() {}
}
