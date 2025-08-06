import { animate, style, transition, trigger, query, stagger } from '@angular/animations';

export const fadeSlide = trigger('fadeSlide', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const fadeInStagger = trigger('fadeInStagger', [
  transition(':enter', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);
export const fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(40px)' }),
      animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);

  
  export const fadeInLeft = trigger('fadeInLeft', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-50px)' }),
      animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]);
  