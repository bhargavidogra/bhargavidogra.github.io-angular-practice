import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { ConcatNamePipe } from './concat-name.pipe';

@Component({
  selector: 'app-lazy-loading-user',
  templateUrl: './lazy-loading-user.component.html',
  styleUrls: ['./lazy-loading-user.component.css'],
  providers: [ConcatNamePipe]
})
export class LazyLoadingUserComponent implements OnInit {

  user: any;
  todayDate : Date = new Date();

  constructor(private route: ActivatedRoute, private usersService: UserService,private concatNamePipe: ConcatNamePipe) { }

  ngOnInit(): void {
    const idParam = +this.route.snapshot.params['id'];
    this.user = this.usersService.users.find((u) => u.id === idParam);

    this.route.params.subscribe(
      (param) => {
        // this.user = this.usersService.users.find((u) => u.id === +param['id']);
    this.user = this.usersService.getUser(param['id'])  
    .subscribe(
      (result) => {
        this.user = result as any;
        console.log('Result: Get Users API - ', result);
      },
      (error) => {
        console.log('Error: Get Users API - ', error);
      },
      () => {
        console.log('Complete: Get Users API');
      }
    );


  
  
  // getUser() {
    
  // }
      }
    );

    }
}
