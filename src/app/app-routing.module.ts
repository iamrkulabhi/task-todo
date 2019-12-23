import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LoginComponent } from './users/login/login.component';
import { AuthGuard } from './users/auth.guard';
import { GuestGuard } from './users/guest.guard';

const routes: Routes = [
  { path: '', component: ListTasksComponent },
  { path: 'edit-task/:id', component: EditTaskComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}


