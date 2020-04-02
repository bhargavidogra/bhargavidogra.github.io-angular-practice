import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-reactive-create-form',
  templateUrl: './reactive-create-form.component.html',
  styleUrls: ['./reactive-create-form.component.css']
})
export class ReactiveCreateFormComponent implements OnInit {

  createForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(''),
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  createUser() {
    this.userService.createUser(
      this.createForm.value
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        this.createForm.reset();
      },
      (error) => {
        console.log('Error: Create User API - ', error);
      },
      () => {
        console.log('Complete: Create User API');
      }
    );
  }

}
