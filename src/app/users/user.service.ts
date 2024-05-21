import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  getUsers() {
    return this.users.slice()
  }

  getUserById(id: string) {
    return this.users.find(user => {
      return user.id === +id
    })
  }
}
