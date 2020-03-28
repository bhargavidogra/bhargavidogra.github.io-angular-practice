import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-lazy-loading-user',
  templateUrl: './lazy-loading-user.component.html',
  styleUrls: ['./lazy-loading-user.component.css']
})
export class LazyLoadingUserComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private usersService: UserService) { }

  ngOnInit(): void {
    const idParam = +this.route.snapshot.params['id'];
    this.user = this.usersService.users.find((u) => u.id === idParam);

    this.route.params.subscribe(
      (param) => {
        this.user = this.usersService.users.find((u) => u.id === +param['id']);
      }
    );
  }

}
