import { Injectable, EventEmitter } from '@angular/core';
import { Task, TaskStatus } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskUpdated = new EventEmitter<Task[]>();

  allTasks: Task[] = [
    new Task('Task1', '', TaskStatus.pending),
    new Task('Task2', '', TaskStatus.completed),
    new Task('Task3', '', TaskStatus.pending),
    new Task('Task4', '', TaskStatus.completed)
  ];

  constructor() { }

  showAllTasks() {
    return this.allTasks.slice();
  }

  addToTasksList(taskName: string) {
    let newTask = new Task(taskName, '', TaskStatus.pending);
    this.allTasks.push(newTask);
    this.taskUpdated.emit(this.allTasks.slice());
  }

  deleteFromTaskLists(id: number) {
    this.allTasks.splice(id, 1);
    this.taskUpdated.emit(this.allTasks.slice());
  }

  getTask(id: number) {
    return this.allTasks[id];
  }

  updateTaskList(index: number, updatedTask: Task) {
    this.allTasks[index] = updatedTask;
  }

}
