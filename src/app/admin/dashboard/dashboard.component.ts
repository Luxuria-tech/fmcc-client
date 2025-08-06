import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { fadeInUp, fadeSlide } from '../../animations';





interface Donation {
  donor: string;
  amount: number;
  date: string;
}

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    BaseChartDirective,
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    
  ],
  animations: [fadeInUp, fadeSlide]
})
export class DashboardComponent implements OnInit {
  /* KPI data */
  totals = {
    donations: 54200,
    users: 1287,
    events: 14,
    volunteers: 96
  };

  chartType: ChartType = 'bar';

  chartData = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Donations',
        data: [1000, 1500, 1200],
        backgroundColor: '#4ac462',
        borderColor: '#267937',
        borderWidth: 2
      }
    ]
  };

  chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#267937'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#267937' }
      },
      y: {
        ticks: { color: '#267937' }
      }
    }
  };
  /* Latest donations table */
  displayedColumns = ['donor', 'amount', 'date'];
  latestDonations: Donation[] = [
    { donor: 'Nkume Susan', amount: 2500, date: '2025-06-10' },
    { donor: 'Global Aid Org', amount: 7500, date: '2025-06-09' },
    { donor: 'Munyuy Felix', amount: 500, date: '2025-06-08' },
    { donor: 'Bakweri Assoc.', amount: 4200, date: '2025-06-07' }
  ];

  /* Donations chart */
  donationsChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  donationsChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.donationsChartLabels,
    datasets: [
      { data: [6500, 4800, 9900, 7200, 8400, 11000],
        label: 'Monthly Donations (XAF)',
        backgroundColor: '#4ac462' }
    ]
  };
  donationsChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: { x: {}, y: { beginAtZero: true } },
    plugins: { legend: { display: false } }
  };
  donationsChartType: ChartType = 'bar';

  ngOnInit(): void { /* Could fetch data via service here */ }

  /* Quick-action button handlers (stub) */
  goto(route: string) { console.log('navigate:', route); }
}
