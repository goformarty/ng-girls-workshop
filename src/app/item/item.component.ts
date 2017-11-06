import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    {{ itemTitle }}
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemTitle: string;
  constructor() { }

  ngOnInit() {
  }

}
