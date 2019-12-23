import { Component, OnInit } from '@angular/core';
import { TaskStatus, Task } from '../Task';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { AlertMessageService } from '../alert-message.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  form: Task = {
    taskName: '',
    taskDesc: '',
    taskStatus: TaskStatus.pending
  };
  taskId: number;

  constructor(
    private activateRoute: ActivatedRoute,
    private taskService: TasksService,
    private router: Router,
    private alertService: AlertMessageService
    ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      params => {
        this.taskId = +params.get('id');
        let task = this.taskService.getTask(this.taskId);
        if (task) {
          this.form.taskName = task.taskName;
          this.form.taskDesc = task.taskDesc;
          this.form.taskStatus = task.taskStatus;
        }
      }
    );
  }

  editTask() {
    console.log(this.form);
    this.taskService.updateTaskList(this.taskId, this.form);
    this.alertService.sendMessage('success', 'Task updated!');
    this.goToTaskList();
  }

  goToTaskList() {
    this.router.navigate(['/']);
  }

}
