import { Component, Input } from '@angular/core';
import { Task } from '../app.task.js'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input task: Task;

  onItemCheck() {

  }
}
