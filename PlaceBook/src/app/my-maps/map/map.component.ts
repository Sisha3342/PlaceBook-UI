// import { MapService } from './map.service';
// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss'],
// })
// export class MapComponent implements OnInit {
//   constructor(private service: MapService) {}

//   resetForm(form?: any): void {
//     this.service.formData = {
//       id: null,
//       address: {
//         country: '',
//         city: '',
//         address: '',
//       },
//     };
//   }

//   onSubmit(form: any): void {
//     this.insertRecord(form);
//   }

//   insertRecord(form: any): void {
//     this.service.postOffice(form.value).subscribe((res) => {
//       this.resetForm(form);
//     });
//   }

//   ngOnInit(): void {
//     this.resetForm();
//   }
// }
