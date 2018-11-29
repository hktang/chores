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

  minDate: Date;
  maxDate: Date;

  props: {
    title: "Modal";
  };

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    console.log("Modal initialized");
    console.log(this.task);
    this.setDateRange();
  }

  closeModal(task: Task) {
    this.modalController.dismiss(task);
  }

  setDateRange() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setFullYear(this.minDate.getFullYear() - 1);
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
  }
}
