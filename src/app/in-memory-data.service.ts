import { InMemoryDbService } from "angular-in-memory-web-api";
import { Task } from "./tasks/task";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 11, name: "Mr. Nice", repeat: false },
      { id: 12, name: "Narco", repeat: false },
      { id: 13, name: "Bombasto", repeat: false }
    ];
    return { tasks };
  }

  // Overrides the genId method to ensure that a task always has an id.
  // If the tasks array is empty,
  // the method below returns the initial number (11).
  // if the tasks array is not empty, the method below returns the highest
  // task id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
