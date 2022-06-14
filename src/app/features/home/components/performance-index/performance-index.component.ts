import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-index',
  templateUrl: './performance-index.component.html',
  styleUrls: ['./performance-index.component.sass']
})
export class PerformanceIndexComponent implements OnInit {
  @Input() kpiData: any;

  constructor() { }

  ngOnInit(): void {
  }

}