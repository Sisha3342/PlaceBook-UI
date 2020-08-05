import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss'],
})
export class UserPhotoComponent implements OnInit {
  width: string;
  height: string;
  @Input() imgSrc: string;

  altImgSrc =
    'https://legacyogden.com/wp-content/uploads/2015/07/No-Image-Available1.png';

  constructor() {}
  handleImageLoad(event: any): void {
    this.width = event.target.naturalWidth;
    this.height = event.target.naturalHeight;
  }
  ngOnInit(): void {}
}
