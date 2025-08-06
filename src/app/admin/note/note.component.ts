import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Notification {
  id: number;
  title: string;
  date: string;
  message: string;
}

@Component({
  selector: 'app-note',
  standalone: true,
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  imports: [CommonModule, FormsModule]
})
export class NoteComponent {

  /* List of notifications */
  notifications: Notification[] = [
    {
      id: 1,
      title: 'Cultural Festival Reminder',
      date: '2025-06-15',
      message: 'Join us for the grand Fako cultural festival at the town square.'
    }
  ];

  /* Form state */
  current: Notification = this.emptyNotification();
  editMode = false;

  /* Helpers */
  emptyNotification(): Notification {
    return { id: 0, title: '', date: '', message: '' };
  }

  /* Save or update */
  saveNotification() {
    if (this.editMode) {
      const idx = this.notifications.findIndex(n => n.id === this.current.id);
      if (idx > -1) this.notifications[idx] = { ...this.current };
    } else {
      const newId = this.notifications.length ? Math.max(...this.notifications.map(n => n.id)) + 1 : 1;
      this.notifications.unshift({ ...this.current, id: newId });
    }
    this.cancelEdit();
  }

  /* Delete */
  deleteNotification(index: number) {
    if (confirm('Delete this notification?')) this.notifications.splice(index, 1);
  }

  /* Edit */
  startEdit(i: number) {
    this.current = { ...this.notifications[i] };
    this.editMode = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* Cancel */
  cancelEdit() {
    this.current = this.emptyNotification();
    this.editMode = false;
  }
}
