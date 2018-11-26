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

  addTask(task: Task): void {
    try {
      const name = task.name.trim();
      if (!name) return;
    }
    catch(error) {
      return;
    }
    
    this.taskService.addTask(task).subscribe(task => {
      this.tasks.push(task);
    });
  }

  updateTask(task: Task): void {
    task.updated = new Date();
    this.taskService.updateTask(task)
      .subscribe(() => this.goBack());
  }
  
  completeTask(task: Task): void {
    task.completed = new Date();
    this.updateTask(task);
  }

  goBack(): void {
    this.location.back();
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(tsk => tsk !== task);
    this.taskService.deleteTask(task).subscribe();
  }

  async presentModal(task?: Task, title?) {
    task = task === null ? new Task : task;
    const modalTitle = title ? title : "Modal";
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { task, props: { title: modalTitle } }
    });
    await modal.present();

    modal.onWillDismiss().then((detail: OverlayEventDetail) => {
      if (typeof detail.data === "object") {
        if (detail.data.hasOwnProperty('id')) {
          this.updateTask(detail.data);
        } else {
          this.addTask(detail.data);
        }
      };
    });
  }
}
