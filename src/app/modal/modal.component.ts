import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalText = '';

  constructor() { }

  ngOnInit() {
  }

  showModal(data?: string) {
    if (document.getElementById('myModal') !== null) {
      this.modalText = data;
      document.getElementById('myModal').style.display = 'block';
    }
  }

  closeModal() {
    if (document.getElementById('myModal') !== null) {
      this.modalText = '';
      document.getElementById('myModal').style.display = 'none';
    }
  }

}
