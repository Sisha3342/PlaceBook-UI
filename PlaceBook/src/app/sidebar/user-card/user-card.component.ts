import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../current-user.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  user: User;

  constructor(private userService: CurrentUserService) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }
}
