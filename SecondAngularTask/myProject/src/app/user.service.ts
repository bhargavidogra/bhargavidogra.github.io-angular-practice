import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { User } from './manage/manage-user/manage-user.component';





@Injectable({
  providedIn: 'root'
})
export class UserService {

  data: string;
  

  id: string;
  name :string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;


  

  // users = [
  //   { id: 1,name: 'One', firstName: 'saksham',lastName : 'saha', age: 25,login :'yes', password: 'xxx',isDeleted :true },
  //   { id: 2,name: 'Two', firstName: 'sakshi',lastName : 'K.', age: 22,login :'yes', password: 'xxx',isDeleted :false },
  //   { id: 3,name: 'Three', firstName: 'ratan',lastName : 'Das', age: 26,login :'yes', password: 'xxx',isDeleted :true },
  //   { id: 4,name: 'Four',firstName: 'akshit',lastName : 'Sharma', age: 28,login :'yes', password: 'xxx',isDeleted :false },
  //   { id: 5,name: 'Five', firstName: 'arushi',lastName : 'sahu', age: 29,login :'yes', password: 'xxx',isDeleted :true },

  // ];
  
     users = [];

  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient)  {
      this.sidebarVisibilityChange.subscribe((value) => {
          this.users[this.id].isDelete = value
      });
  }

  toggleSidebarVisibility() {
      this.sidebarVisibilityChange.next(!this.isDeleted);
  }





  getUsers() {
    return this.http.get<any[]>('http://localhost:8080/users');
  }

  getUser(id: string) {
    return this.http.get('http://localhost:8080/users/'+ id);
  }

  createUser(user: User) {
    return this.http.post('http://localhost:8080/users', user);
  }

  updateUser(user: Partial<User>) {
    console.log(user);
    return this.http.put('http://localhost:8080/users/' + user.id, {
      password: user.password,
      age: user.age,
      isDeleted: user.isDeleted
    });
 }

  delete(id: string) {
    return this.http.delete('http://localhost:8080/users/' + id);
  }

  getFile() {
    // this.http.get('assets/example.txt').subscribe(
    //   (result) => {
    //     this.apiResults = result;
    //   },
    //   error => console.log(error)
    // )

    this.http.get('assets/example.txt').pipe(
      map(result => result),
      retry(3),
      catchError((error) => {
        console.log(error)
        return throwError;
      })
    ).subscribe();
  }











}
