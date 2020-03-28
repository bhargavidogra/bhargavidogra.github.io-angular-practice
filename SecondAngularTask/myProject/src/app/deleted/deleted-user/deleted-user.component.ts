import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleted-user',
  templateUrl: './deleted-user.component.html',
  styleUrls: ['./deleted-user.component.css']
})
export class DeletedUserComponent implements OnInit {

  usersList = [];

  constructor(private usersService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.usersList = this.usersService.users;
  }

  showDetails(id){
    this.router.navigate(['manageUsers', id]);
  }

}
