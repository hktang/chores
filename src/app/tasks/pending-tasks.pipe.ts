import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';

/*
 * Filters only pending tasks
 * Usage:
 *   tasks | pendingTasks
 * Example:
 *   {{ tasks | pendingTasks }}
*/
@Pipe({name: 'pendingTasks'})
export class PendingTasksPipe implements PipeTransform {
  transform(tasks: Task[]): Task[] {
    return tasks;
  }
}