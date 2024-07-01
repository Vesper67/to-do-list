import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './app.task'
import { TaskComponent } from './tasklist/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  userName = '';
  userNameInput = '';
  setNewName = true;
  newTaskText = '';
  errorMsg = '';
  tasks: Task[] = [];
  numOfTasks = 0;
  numOfCompleteTasks = 0;
  numOfUnfinishedTasks = 0;
  taskID = 0;

  onUserNameInput(name: string) {
    this.userNameInput = name;
  }

  setUser() {
    if (!this.userNameInput) {
      this.errorMsg = "Name can't be empty";
      return;
    }

    this.userName = this.userNameInput;
    this.userNameInput = '';
    this.errorMsg = '';
    this.setNewName = false;
  }

  newNameMode() {
    this.setNewName = true;
  }

  onNewTaskInput(task: string) {
    this.newTaskText = task;
  }

  addNewTask() {
    if (!this.newTaskText) {
      this.errorMsg = 'A new task must contain text';
      return;
    }

    const task: Task = {
      text: this.newTaskText,
      isChecked: false,
      id: this.taskID
    }
    this.taskID += 1;
    this.tasks.push(task)
    this.newTaskText = '';
    this.errorMsg = '';
    this.numOfTasks = this.tasks.length;
  }

  onItemCheck() {

  }
}
