import { Component, OnInit } from '@angular/core';
import { ValidatorFn, AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-reactive-update-form-component',
  templateUrl: './reactive-update-form-component.component.html',
  styleUrls: ['./reactive-update-form-component.component.css'],
  
})
export class ReactiveUpdateFormComponentComponent implements OnInit {

  currentUser;
  userId;
  user: any;
  reqSub: any;

  updateForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      this.passwordValidator(new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')).bind(this)
    ]),
    age: new FormControl(''),
  });
  



  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngDoCheck() {
    console.log('Reactive Form Changes');
  }

  ngOnInit(): void {

    const idParam = this.route.snapshot.params['id'];
    this.user = this.userService.getUser(idParam);
  //    console.log(this.user);
    this.updateForm.valueChanges.subscribe((changes) => {
      console.log('Update Form valueChanges ', changes);
    });

    this.updateForm.statusChanges.subscribe((status) => {
      console.log('Update Form statusChanges ', status, this.updateForm);
    });

    this.route.params.subscribe(
      (param) => {
        this.userId =idParam;
        this.userService.getUser(param['id']).subscribe(
          (result) => {
            this.currentUser = result;
            this.updateForm.setValue({
              password: this.currentUser.password,
              age: this.currentUser.age,
            });
            console.log('Result: Get User API - ', result);
          },
          (error) => {
            console.log('Error: Get User API - ', error);
          },
          () => {
            console.log('Complete: Get User API');
          }
        );
      }
    );
  }

  updateUser() {
    
    console.log(this.user);
     this.userService.updateUser(
      {
        id: this.currentUser.id,
        age: this.updateForm.value.age,
        password: this.updateForm.value.password,
        isDeleted: this.currentUser.isDeleted
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
    )
  }


  passwordValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const testMatch = nameRe.test(control.value);
      return testMatch ? null : { 'requireOneCharOneNumber': { value: control.value } };
    };
  }
}
