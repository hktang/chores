import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";

import { Task } from "../tasks/task";
import { TaskService } from "../tasks/task.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  tasks: Task[];

  constructor(
    private taskService: TaskService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(tsk => tsk !== task);
    this.taskService.deleteTask(task).subscribe();
  }

  async presentModal(task: Task) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { task, props:{title:"Task detail"}}
    });
    return await modal.present();
  }
}
