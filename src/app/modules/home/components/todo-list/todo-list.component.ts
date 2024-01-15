import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
    { task: 'First', checked: true },
    { task: 'Second', checked: false },
  ];

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public setEmit(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteAll() {
    this.taskList = [];
  }
}
