import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Statistics } from '../../../models/statistics';

@Component({
  selector: 'app-statistics-box',
  templateUrl: './statistics-box.component.html',
  styleUrls: ['./statistics-box.component.scss'],
})
export class StatisticsBoxComponent implements OnInit {
  total: number;
  active: number;
  completed: number;
  canceled: number;

  constructor(
    private statisticsService: StatisticsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setStatistics();
  }

  setStatistics(): void {
    this.statisticsService
      .getStatistics(this.authService.getCurrentUser().id)
      .subscribe((stats: Statistics) => {
        this.active = stats.ACTIVE || 0;
        this.completed = stats.COMPLETED || 0;
        this.canceled = stats.CANCELED || 0;

        this.total = this.active + this.completed + this.canceled;
      });
  }
}
