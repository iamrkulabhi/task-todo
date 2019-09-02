import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertMessageService } from '../alert-message.service';
import { Subscription } from 'rxjs';
import { Alert } from '../Alert';

@Component({
  selector: 'app-messgaes',
  templateUrl: './messgaes.component.html',
  styleUrls: ['./messgaes.component.css']
})
export class MessgaesComponent implements OnInit, OnDestroy {

  alertType = '';
  alertMessage = '';
  subcription: Subscription;

  constructor(private alertService: AlertMessageService) {  
    this.subcription = this.alertService.getMessage().subscribe(
      (data: Alert) => {
        this.alertType = data.type;
        this.alertMessage = data.message;
      }
    );  
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
