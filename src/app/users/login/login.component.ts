import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertMessageService } from 'src/app/alert-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertMessage: AlertMessageService
    ) { }

  ngOnInit() {
  }

  login() {
    // console.log(this.form);
    const validate = !!this.authService.validateUserDetails(this.form);
    if (validate) {
      this.form.username = '';
      this.form.password = '';
      this.alertMessage.sendMessage('success', 'Welcome!');
      this.router.navigate(['/']);
    } else {
      this.form.password = '';
      this.alertMessage.sendMessage('failed', 'Wrong Username or password!');
    }
  }

}
