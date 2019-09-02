import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { AlertMessageService } from '../alert-message.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskName = '';

  constructor(
    private taskService: TasksService,
    private alertService: AlertMessageService
    ) { }

  ngOnInit() {
  }

  addTask(){
    this.taskService.addToTasksList(this.taskName);
    this.alertService.sendMessage('success', 'New task added!');
    this.taskName = '';
  }

}
