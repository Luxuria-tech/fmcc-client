import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-contacts',
  imports: [HeaderComponent,CommonModule,ReactiveFormsModule,MatButtonModule,FooterComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  animations: [
    /* hero text */
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    /* timeline list */
    trigger('timelineAnim', [
      transition(':enter', [
        query('.timeline-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(120, animate('600ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ))
        ])
      ])
    ])
  ]
})
export class ContactsComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Thank you! Your message has been submitted.');
      this.contactForm.reset();
    }
  }
  scrollToForm(): void {
    const formEl = document.getElementById('contactForm');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
