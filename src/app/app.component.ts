import {Component} from '@angular/core';

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
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'untitled1';
    tasks = [new Note('Task1', 'Desc1'),
        new Note('Task2', 'Desc2'),
        new Note('Task3', 'Desc3')];
    taskName = '';
    taskDesc = '';
    selectedTask = null;
    selectedDiv = null;


    AddTask() {
        this.tasks.push(new Note(this.taskName, this.taskDesc));
    }

    DelTask(i) {
        this.tasks.splice(i, 1);
        this.selectedTask = null;
    }

    ShowNote(i: number) {
        this.selectedTask = this.tasks[i];
        this.selectedDiv = i;
    }
}
