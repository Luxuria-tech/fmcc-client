import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactService, Contact } from '../../services/contact.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cont',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent implements OnInit, OnDestroy {

  contacts: Contact[] = [];
  loading = false;
  private destroy$ = new Subject<void>();

  constructor(private svc: ContactService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.svc.list()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.contacts = res;
          this.loading = false;
        },
        error: err => {
          console.error('Failed to load contacts', err);
          this.loading = false;
        }
      });
  }

  deleteContact(idx: number) {
    const id = this.contacts[idx].id!;
    if (confirm('Delete this contact?')) {
      this.loading = true;
      this.svc.delete(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => this.load(),
          error: err => {
            console.error('Delete failed', err);
            this.loading = false;
          }
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
