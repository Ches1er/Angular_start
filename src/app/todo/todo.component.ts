import {Component, OnInit} from '@angular/core';

class Note {

  private _name: string;
  private _desc: string;

  constructor(name: string, desc: string) {
    this._name = name;
    this._desc = desc;

  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  test = [1, 2, 3, 4, 5];
  time: string;
  tasks = [new Note('Task1', 'Desc1'),
    new Note('Task2', 'Desc2'),
    new Note('Task3', 'Desc3')];
  taskName = '';
  taskDesc = '';
  selectedTask = null;
  selectedDiv: number;

  constructor() {
    setInterval(() => {
      this.time = (new Date()).toLocaleTimeString() ;
    }, 1000);
  }

  ngOnInit() {
  }

  AddTask() {
    this.tasks.push(new Note(this.taskName, this.taskDesc));
  }

  DelTask(i) {
    this.tasks.splice(i, 1);
    this.selectedTask = null;
    this.selectedDiv = -1;
  }

  ShowNote(i: number) {
    this.selectedTask = this.tasks[i];
    this.selectedDiv = i;
  }

}
