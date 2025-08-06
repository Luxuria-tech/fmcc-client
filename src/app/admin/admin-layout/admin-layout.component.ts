import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({

  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  imports: [CommonModule, RouterModule],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-260px)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-260px)' }))
      ])
    ])
  ]
})
export class AdminLayoutComponent {
  /** mobile sidebar toggle */
  sidebarOpen = signal(false);
  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }
}
