import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  usersList = [];
  asideVisible: boolean;

  constructor(private usersService: UserService, private router: Router) {
    this.asideVisible = usersService.isDeleted;
   }

  ngOnInit(): void {
    this.usersList = this.usersService.users;
  }

  showDetails(id){
    this.router.navigate(['manageUsers', id]);
  }

}
