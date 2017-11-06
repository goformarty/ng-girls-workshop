import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input [value]="title">
  <button>Save</button>
  <p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  title: string;

  constructor() {
    console.log('in constructor');
    this.changeTitle('I love Angular');
    console.log(this.title);
   }

  ngOnInit() {
    console.log('oninit magic starts');
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }

  changeTitle(newTitle: string): string {
    this.title = newTitle;
    return this.title;
  }

}
