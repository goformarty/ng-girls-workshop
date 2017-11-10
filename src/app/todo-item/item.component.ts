import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: 'item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() changeTitle: EventEmitter<any> = new EventEmitter();

  editing = false;

  constructor() {
  }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  editItem() {
    this.editing = true;
  }

  changeItemTitle(newTitle) {
    this.editing = false;
    this.changeTitle.emit({
      item: this.item,
      newTitle
    });
  }

  cancelEdit() {
    this.editing = false;
  }

}
