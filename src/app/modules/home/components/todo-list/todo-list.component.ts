import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('item') || '[]'
  );
  ngDoCheck() {
    this.setLocalStorage();
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public setEmit(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteAll() {
    this.taskList = [];
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('item', JSON.stringify(this.taskList));
    }
  }
}
