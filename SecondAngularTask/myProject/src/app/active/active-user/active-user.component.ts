import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {

  usersList = [];
  asideVisible: boolean;

    

  constructor(private usersService: UserService, private router: Router) {
   }

  ngOnInit(): void {
    this.usersList = this.usersService.users;
  }

  // showDetails(id){
  //   this.router.navigate(['manageUsers', id]);
  // }


    get isDeleted(): boolean {
        return this.usersService.isDeleted;
    }

    showDetails(id){
        this.usersService.toggleSidebarVisibility()
    }
}
