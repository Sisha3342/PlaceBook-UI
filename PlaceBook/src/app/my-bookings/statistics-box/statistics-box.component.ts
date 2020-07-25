import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';
import { AuthService } from '../../auth/auth.service';
import { Statistics } from './statistics';

@Component({
  selector: 'app-statistics-box',
  templateUrl: './statistics-box.component.html',
  styleUrls: ['./statistics-box.component.scss'],
})
export class StatisticsBoxComponent implements OnInit {
  total: number;
  active: number;
  completed: number;
  cancelled: number;

  constructor(
    private statisticsService: StatisticsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.statisticsService
      .getStatistics(this.authService.getCurrentUser().id)
      .subscribe((stats: Statistics) => {
        this.active = stats.active;
        this.completed = stats.completed;
        this.cancelled = stats.cancelled;

        this.total = stats.active + stats.completed + this.cancelled;
      });
  }
}
