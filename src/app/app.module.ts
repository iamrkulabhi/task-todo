import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TasksService } from './tasks.service';

import { FormsModule } from '@angular/forms';
import { MessgaesComponent } from './messgaes/messgaes.component';
import { ModalComponent } from './modal/modal.component';
import { SeachTaskComponent } from './seach-task/seach-task.component';
import { SearchTasksPipe } from './seach-task/search-tasks.pipe';
import { TasksDirective } from './tasks.directive';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './users/login/login.component';
=======
>>>>>>> 2d834d042f8361868755f395680e34b2dea9bf95

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTasksComponent,
    EditTaskComponent,
    MessgaesComponent,
    ModalComponent,
    SeachTaskComponent,
    SearchTasksPipe,
<<<<<<< HEAD
    TasksDirective,
    HeaderComponent,
    LoginComponent
=======
    TasksDirective
>>>>>>> 2d834d042f8361868755f395680e34b2dea9bf95
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
