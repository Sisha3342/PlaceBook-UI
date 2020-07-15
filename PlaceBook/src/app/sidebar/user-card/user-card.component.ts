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
    this.userImage = this.userImage = 'https://files.adme.ru/files/news/part_165/1658265/8882015-41015410-1-0-1514194714-1514194724-1500-1-1514194724-650-4561b7ccf5-1514279441.jpg';
  }

}
