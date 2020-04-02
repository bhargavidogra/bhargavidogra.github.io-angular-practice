import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { ActiveUserPipePipe } from './active-user-pipe.pipe';


@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css'],
  providers: [ActiveUserPipePipe]
})
export class ActiveUserComponent implements OnInit {

  usersList = [];
  asideVisible: boolean;

  fname: string;
  lname: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
  id: string;

  reqSub;



  userName = '';



  constructor(private usersService: UserService, private router: Router,private activeUser: ActiveUserPipePipe) {
   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  // showDetails(id){
  //   this.router.navigate(['manageUsers', id]);
  // }

    showDetails(id){
        this.usersService.toggleSidebarVisibility()
    }


    getAllUsers() {
      this.usersService.getUsers()  
      .subscribe(
        (result) => {
          this.usersList = result as any;
          console.log('Result: Get Users API - ', result);
        },
        (error) => {
          console.log('Error: Get Users API - ', error);
        },
        () => {
          console.log('Complete: Get Users API');
        }
      );
    }



    updateUser(updateid) {
      this.reqSub = this.usersService.updateUser(
        {
          id: updateid,
          isDeleted:true
        }
      ).subscribe(
        (result) => {
          console.log('Result: Update User API - ', result);
        },
        (error) => {
          console.log('Error: Update User API - ', error);
        },
        () => {
          console.log('Complete: Update User API');
        }
      );
    }





}
export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted?: boolean;
}

