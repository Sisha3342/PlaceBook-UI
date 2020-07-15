import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  userName: string;
  userImage: string;

  constructor() { }

  ngOnInit(): void {
    this.userName = 'Sasha';
    this.userImage = '../assets/images/sisha.jpg';
  }

}
