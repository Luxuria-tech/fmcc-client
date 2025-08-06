import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-notifications',
  imports: [HeaderComponent, MatSelectModule ,FooterComponent,
    MatExpansionModule,
    MatIconModule ,
    MatButtonModule,CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  selectedFilter: string = 'all';

  notifications = [
    { title: 'New Event', description: 'You have a new event.', time: new Date(), read: false, type: 'events' },
    { title: 'Announcement', description: 'Important update!', time: new Date(), read: true, type: 'announcements' },
    { title: 'Message', description: 'You have a new message.', time: new Date(), read: false, type: 'unread' },
  ];

  filter() {
    // Optional: add logic to filter notifications
    console.log('Filtering notifications by:', this.selectedFilter);
  }

  markAsRead(index: number) {
    this.notifications[index].read = true;
  }

  markAllAsRead() {
    this.notifications.forEach(n => n.read = true);
  }

  open(index: number) {
    // Optional: logic when opening a notification
    console.log('Opened notification at index:', index);
  }

}
