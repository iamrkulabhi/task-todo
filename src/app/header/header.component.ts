import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';
import { User } from '../users/user';
import { AlertMessageService } from '../alert-message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerAuthStaus: boolean;
  user: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private alertMessage: AlertMessageService
    ) { }

  ngOnInit() {
    this.authService.authStatus.subscribe(value => {
      this.headerAuthStaus = value;
      if (this.headerAuthStaus) {
        const authUserIndex = +this.authService.getAuthUserIndex();
        this.user = this.userService.getUser(authUserIndex);
        // console.log(this.user);
      }
    });
  }

  doLogout(link: string = 'login') {
    this.authService.removeAuthUserIndex();
    this.alertMessage.sendMessage('success', 'Logout Successfully!');
    this.router.navigate([`/${link}`]);
  }

}
