import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';    // For *ngIf, *ngFor, pipes like date, slice
import { FormsModule } from '@angular/forms';      // For ngModel, ngForm

import { EventService,Event } from '../../services/event.service';


@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // add other imports here if needed
  ],
})
export class UpcomingComponent implements OnInit {
  events: Event[] = [];
  current: Event = { title: '', date: '', description: '', location: '' };
  editMode = false;
  editIndex = -1;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.list().subscribe(events => this.events = events);
  }

  saveEvent() {
    if (this.editMode && this.current.id != null) {
      this.eventService.update(this.current.id, this.current).subscribe(updated => {
        this.events[this.editIndex] = updated;
        this.resetForm();
      });
    } else {
      this.eventService.add(this.current).subscribe(newEvent => {
        this.events.unshift(newEvent);
        this.resetForm();
      });
    }
  }

  startEdit(index: number) {
    this.editMode = true;
    this.editIndex = index;
    this.current = { ...this.events[index] };
  }

  cancelEdit() {
    this.resetForm();
  }

  deleteEvent(index: number) {
    const id = this.events[index].id;
    if (id != null && confirm('Delete this event?')) {
      this.eventService.delete(id).subscribe(() => {
        this.events.splice(index, 1);
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.editMode = false;
    this.editIndex = -1;
    this.current = { title: '', date: '', description: '', location: '' };
  }
}
