import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.sass']
})
export class CommonHeaderComponent implements OnInit {
  @Input() templateHeader!: TemplateRef<any>;
  @Input() templateContent!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
