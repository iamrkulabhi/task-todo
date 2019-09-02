import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alert } from './Alert';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {


  alertMessage = new Subject<Alert>();

  constructor() { }

  sendMessage(type: string, messageText: string) {
    let alert = new Alert(type, messageText);
    this.alertMessage.next(alert);
  }

  getMessage(): Observable<Alert> {
    return this.alertMessage.asObservable();
  }

  clearMessage() {
    this.alertMessage.next();
  }
}
