
import { HeaderComponent } from '../header/header.component';
import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  signal
  
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  imports: [HeaderComponent,CommonModule,FooterComponent ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
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
export class AboutComponent implements OnInit,OnDestroy{
  /* ---------- Tabs ---------- */
  currentTab = signal<'mission' | 'vision' | 'values'>('mission');
  setTab(tab: 'mission' | 'vision' | 'values') {
    this.currentTab.set(tab);
  }

  /* ---------- Stats Counter ---------- */
  statsVisible = false;
  visitors = signal(0);
  trainees = signal(0);
  events   = signal(0);

  private counterTimer: any;
  private animateCounters() {
    const target = { visitors: 15000, trainees: 3200, events: 260 };
    const step   = 20;          // ms
    const inc    = { v: 75, t: 16, e: 2 };

    this.counterTimer = setInterval(() => {
      if (this.visitors() < target.visitors) this.visitors.update(v => Math.min(v + inc.v, target.visitors));
      if (this.trainees() < target.trainees) this.trainees.update(v => Math.min(v + inc.t, target.trainees));
      if (this.events()   < target.events)   this.events.update(v => Math.min(v + inc.e, target.events));

      if (
        this.visitors() === target.visitors &&
        this.trainees() === target.trainees &&
        this.events()   === target.events
      ) { clearInterval(this.counterTimer); }
    }, step);
  }

  /* start counters when the section scrolls into view */
  @HostListener('window:scroll')
  onScroll() {
    if (this.statsVisible) return;
    const statsEl = document.getElementById('stats');
    if (statsEl) {
      const rect = statsEl.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        this.statsVisible = true;
        this.animateCounters();
      }
    }
  }

  ngOnInit() {}
  ngOnDestroy() {
    clearInterval(this.counterTimer);
  }

  /* ---------- Timeline data ---------- */
  milestones = [
    { year: 2010, text: 'Community elders propose a multipurpose cultural hub.' },
    { year: 2013, text: 'Ground-breaking ceremony on donated municipal land.' },
    { year: 2016, text: 'FMCC officially opens with art gallery & 120-seat hall.' },
    { year: 2020, text: 'Launch of youth entrepreneurship & digital skills lab.' },
    { year: 2024, text: 'Hosted the first Mbando Ya Hvako pre-festival expo.' }
  ];

  /* ---------- Team ---------- */
  team = [
    { name: 'HRM Robert Esuka Enderly', role: 'Paramount chief & Naliomo of Buea', img: 'assets/chiefEsuka.jpeg' },
    { name: 'HRH Epupa Ekum Victor', role: 'Paramount chief & Naliomo of Limbe', img: 'assets/chiefLimbe.jpeg' },
    { name: 'Dr Amos Namanga Ngongi',  role: 'Chairman of the Mbando stearing committe', img: 'assets/namanga.jpeg', bio: 'Archivist preserving Bakweri artifacts.' },
    { name: 'Dr Etonde Mbua',   role: 'Vice chairperson of mbando stearing committee', img: 'assets/etonde.jpeg', bio: 'Passionate about youth empowerment' },
    { name: 'Mr Samuel Njie Kale',     role: 'Chairman of mbando Trust fund committe', img: 'assets/samuel.jpeg', bio: 'Runs FMCC community health drives.' },
  
  
  ];

}
