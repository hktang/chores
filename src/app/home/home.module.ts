import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import { ModalPageModule } from "../modal/modal.module";
import { ModalPage } from "../modal/modal.page";
import { CallbackPipe } from "../filter.pipe";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ModalPageModule,
    RouterModule.forChild([{ path: "", component: HomePage }])
  ],
  declarations: [HomePage, CallbackPipe],
  entryComponents: [ModalPage]
})
export class HomePageModule {}
