import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  standalone: false,
})
export class TableDataComponent implements OnInit {
  @Input() title: string = '';
  @Input() data: any = {};

  constructor() {}

  ngOnInit() {}
}
