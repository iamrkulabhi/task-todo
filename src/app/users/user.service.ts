import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {username: 'admin', password: 'W@`6AA6]7+x_mn<U'},
    {username: 'superadmin', password: 'U&Ywh_:>rjp2TH8n'}
  ];

  constructor() { }

  get allUsers(): User[] {
    return [...this.users];
  }

  getUser(userIndex: number) {
    return this.users[userIndex];
  }
}
