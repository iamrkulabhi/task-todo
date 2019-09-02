import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TasksService } from '../tasks.service';
import { AlertMessageService } from '../alert-message.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Task[];

  constructor(
    private taskService: TasksService,
    private alertService: AlertMessageService
    ) { }

  ngOnInit() {
    this.tasks = this.taskService.showAllTasks();
    this.taskService.taskUpdated.subscribe(
      (data: Task[]) => {
        this.tasks = data;
      }
    );
  }

  deleteTask(id: number) {
    console.log(id);
    this.taskService.deleteFromTaskLists(id);
    this.alertService.sendMessage('failed', 'Task deleted!');
  }

}
