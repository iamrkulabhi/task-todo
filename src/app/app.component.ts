import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ModalComponent, {static: false}) modalComponent: ModalComponent;
  title = 'angular-todo';

  open() {
    this.modalComponent.showModal('this is my text.');
  }

}
