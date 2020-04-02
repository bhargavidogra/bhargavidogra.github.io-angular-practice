import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  fname: string;
  lname: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
  id: string;

  reqSub;



  userName = '';


  usersList =[];
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

  editDetails(id){
    this.router.navigate(['manageUsers/editUsers', id]);
  }

  CreatingAUser(){
    var x = document.getElementById("createauser");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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

  getUser() {
    this.usersService.getUser(this.id)  
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





  createUser() {
    this.usersService.createUser(
      {
        firstName: this.fname,
        lastName: this.lname,
        login: this.login,
        age: this.age,
        password: this.password
      }
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
      },
      (error) => {
        console.log('Error: Create User API - ', error);
      },
      () => {
        console.log('Complete: Create User API');
      }
    );
  }

  deleteUser() {
    this.usersService.delete(this.id).subscribe(
      (result) => {
        console.log('Result: Delete User API - ', result);
      },
      (error) => {
        console.log('Error: Delete User API - ', error);
      },
      () => {
        console.log('Complete: Delete User API');
      }
    );
  }

  handleChange(eventInfo) {
    this.userName = eventInfo.target.value;
  }

  updateUser() {
    this.reqSub = this.usersService.updateUser(
      {
        id: this.id,
        age: this.age,
        password: this.password,
        isDeleted: this.isDeleted
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


