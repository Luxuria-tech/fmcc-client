import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MomoService } from '../services/momo.service';

@Component({
  selector: 'app-donate',
  standalone: true,
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  imports: [
    FooterComponent,
    HeaderComponent,
    ReactiveFormsModule,
    RouterModule,
    MatProgressSpinner,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    CommonModule,
    MatButtonModule,
    FormsModule
  ]
})
export class DonateComponent {
  momoForm!: FormGroup;
  paymentType: string = '';
  isSubmitting: boolean = false;
  responseMessage: string = '';
  showSuccess: boolean = false;
  showErrorImage: boolean = false; // ✅ NEW FLAG

  bankData = {
    fullName: '',
    bankName: '',
    transactionId: '',
    amount: null
  };

  constructor(
    private fb: FormBuilder,
    private paySvc: MomoService
  ) {}

  ngOnInit() {
    this.momoForm = this.fb.group({
      fullName: ['', Validators.required],
      momoNumber: ['', [Validators.required, Validators.pattern('^\\+237[0-9]{9}$')]],
      amount: [null, [Validators.required, Validators.min(100)]],
    });
  }

  showForm(type: string) {
    this.paymentType = type;
    this.responseMessage = '';
    this.showSuccess = false;
    this.showErrorImage = false; // ✅ reset on switching forms
  }

  onSubmit() {
    if (this.momoForm.invalid) return;

    this.isSubmitting = true;

    this.paySvc.requestMomo(this.momoForm.value).subscribe({
      next: (res) => {
        this.responseMessage = res.message || 'Payment request sent successfully.';
        this.showSuccess = true;
        this.isSubmitting = false;
        this.showErrorImage = false;
        this.momoForm.reset();
      },
      error: (err) => {
        this.responseMessage = err.error?.message || 'Something went wrong with MoMo payment.';
        this.isSubmitting = false;
        this.showErrorImage = true; // ✅ Show image on error
      }
    });
  }

  submitBank() {
    this.responseMessage = 'Bank payment recorded successfully.';
  }

  closeModal() {
    this.showSuccess = false;
  }

  goal = 800000000;          
  raised = 50000000;        
  get progress() {
    return Math.min((this.raised / this.goal) * 100, 100);
  }

  presets = [1000, 2500, 5000, 10000];

  topDonors = [
    { name: 'Esther N.', amount: 10000, message: 'Keep up the good work!' },
    { name: 'Anonymous', amount: 7500, message: 'Proud of FMCC' },
    { name: 'James E.', amount: 5000, message: '' },
    { name: 'Kumba Group', amount: 12000, message: 'Cultural pride forever!' },
    { name: 'Lilian K.', amount: 8000, message: 'Happy to contribute' }
  ];

  totalDonors = this.topDonors.length + 25;

  onImageSelect(evt: Event) {}

  scrollToForm(): void {
    const formEl = document.getElementById('contactForm');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
