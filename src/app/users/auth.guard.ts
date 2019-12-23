import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AlertMessageService } from '../alert-message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private alertMessage: AlertMessageService
    ) {}

  // tslint:disable-next-line: max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // throw new Error("Method not implemented.");
    if (this.authService.isUserLoggedin()) {
      return true;
    } else {
      this.alertMessage.sendMessage('failed', 'Sorry, You are not allowed to see further!');
      return false;
    }
  }

}
