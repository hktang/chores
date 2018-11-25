import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../tasks/task";
import { ModalController } from "@ionic/angular";

import { TaskService } from "../tasks/task.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"]
})
export class ModalPage implements OnInit {
  @Input()
  task: Task;

  tasks: Task[];

  props: {
    title: "Modal";
  };

  constructor(
    private taskService: TaskService,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  closeModal(taskName?: String) {
    this.modalController.dismiss(taskName);
  }
}
