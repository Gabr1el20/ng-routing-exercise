import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent  implements OnInit{
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

  selectUser(user) {
    this.router.navigate(['/user', user.id]);
  }
}
