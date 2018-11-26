import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../tasks/task";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"]
})
export class ModalPage implements OnInit {
  @Input()
  task: Task;

  props: {
    title: "Modal";
  };

  constructor(
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  closeModal(task: Task) {
    this.modalController.dismiss(task);
  }
}
