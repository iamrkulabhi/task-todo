import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authFlag = new BehaviorSubject<boolean>(this.isUserLoggedin());

  constructor(private userService: UserService) { }

  get authStatus() { // get the status
    return this.authFlag.asObservable();
  }

  changeAuthStatus(status: boolean) { this.authFlag.next(status); }

  validateUserDetails(loginDetails: User) {
    const users = this.userService.allUsers;
    const user: User = users.find((item, index, arr) => {
      if (item.username === loginDetails.username && item.password === loginDetails.password) {
        this.setAuthUserIndex(index); // set user index in localstorage
        return true;
      }
    });
    if (user) {
      this.changeAuthStatus(this.isUserLoggedin());
      return this.isUserLoggedin();
    } else {
      return false;
    }
  }

  setAuthUserIndex(userIndex: any) {
    localStorage.setItem('userIndex', userIndex);
  }

  isUserLoggedin() { return (localStorage.getItem('userIndex') ? true : false); }

  getAuthUserIndex() {
    const userIndex = localStorage.getItem('userIndex');
    // console.log(userIndex);
    return userIndex;
  }

  removeAuthUserIndex() {
    localStorage.removeItem('userIndex');
    this.changeAuthStatus(this.isUserLoggedin());
  }
}
