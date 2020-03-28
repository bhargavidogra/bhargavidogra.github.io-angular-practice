import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

  users = [
    { id: 1,name: 'One', firstName: 'saksham',lastName : 'saha', age: 25,login :'yes', password: 'xxx',isDeleted :true },
    { id: 2,name: 'Two', firstName: 'sakshi',lastName : 'K.', age: 22,login :'yes', password: 'xxx',isDeleted :false },
    { id: 3,name: 'Three', firstName: 'ratan',lastName : 'Das', age: 26,login :'yes', password: 'xxx',isDeleted :true },
    { id: 4,name: 'Four',firstName: 'akshit',lastName : 'Sharma', age: 28,login :'yes', password: 'xxx',isDeleted :false },
    { id: 5,name: 'Five', firstName: 'arushi',lastName : 'sahu', age: 29,login :'yes', password: 'xxx',isDeleted :true },

  ];


  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor()  {
      this.sidebarVisibilityChange.subscribe((value) => {
          this.users[this.id].isDelete = value
      });
  }

  toggleSidebarVisibility() {
      this.sidebarVisibilityChange.next(!this.isDeleted);
  }


}
