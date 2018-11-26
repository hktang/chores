import { Component, OnInit } from "@angular/core";
import { OverlayEventDetail } from "@ionic/core";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";
import { Location } from '@angular/common';

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
    public modalController: ModalController,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  addTask(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.taskService.addTask({ name } as Task).subscribe(task => {
      this.tasks.push(task);
    });
  }

  update(task: Task): void {
    this.taskService.updateTask(task)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(tsk => tsk !== task);
    this.taskService.deleteTask(task).subscribe();
  }

  async presentModal(task?: Task, title?) {
    const modalTitle = title ? title : "Modal";
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { task, props: { title: modalTitle } }
    });
    await modal.present();

    modal.onWillDismiss().then((detail: OverlayEventDetail) => {
      if (typeof detail.data === "string") {
        this.addTask(detail.data);
      } else if (typeof detail.data === "object") {
        this.update(detail.data);
      };
    });
  }
}
