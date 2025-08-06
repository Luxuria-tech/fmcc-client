import { CommonModule,NgOptimizedImage  } from '@angular/common';
import { Component, OnInit,
  OnDestroy,
  ViewChild,
  ElementRef, } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { FooterComponent } from '../footer/footer.component';
import { SubBlogComponent } from '../sub-blog/sub-blog.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  imports: [CommonModule,HeaderComponent,NgOptimizedImage,FooterComponent ,SubBlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
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
export class HomeComponent implements OnDestroy,OnInit{

  unread = 4;

  

 
backgroundUrl = 'assets/grrn.jpeg';



   constructor( private router: Router) {}

  overlayImages =[
    {
      Image: 'assets/esuka.PNG',
      Title: 'chief Esuka'
    },
    {
      Image: 'assets/esuka.PNG',
      Title: 'chief Esuka'
    },
    {
      Image: 'assets/esuka.PNG',
      Title: 'chief Esuka'
    }
  ]

  heritageArchive = [
    {
      image: 'assets/mbando2.PNG',
      title: 'Traditional Wedding Rituals',
      description: 'A deep dive into Fako traditional weddings from the early 1900s.'
    },
    {
      image: 'assets/mbando small size pix/DSC04495.jpg',
      title: 'Fako Chiefs’ Gallery',
      description: 'Historic photos and achievements of Fako paramount chiefs.'
    },
    {
      image: 'assets/mbando small size pix/DSC04353.jpg',
      title: 'The Esuka Dance Legacy',
      description: 'A documentary-style archive of one of Fako’s proudest dances.'
    }
  ];
  
  testimonials = [
    { name: 'Mama Ekema', message: 'FMCC brought our traditions back to life. I feel proud again.' },
    { name: 'Charles Ndongo', message: 'A center where I found my roots and purpose through cultural dance.' },
    { name: 'Linda Mbua', message: 'It’s more than a center, it’s our legacy being preserved beautifully.' },
  ];
  

  upcomingEvents = [
    { title: 'Annual Fako Cultural Festival', date: new Date('2025-07-15'), description: 'A celebration of traditional dance, music, and cuisine.' },
    { title: 'Art & Crafts Expo', date: new Date('2025-08-10'), description: 'Showcasing local talent in sculpture, paintings, and handmade crafts.' },
    { title: 'FMCC Youth Talent Night', date: new Date('2025-09-05'), description: 'A platform for young people to showcase their artistic skills.' },
  ];
  

 

 culturalSlides = [
    
    {
      image: 'assets/mbando pictures fix/200A5039.jpg',
      alt: "women's latest fashion sale",
      content: {
       
        title: "Chief Esuka Enderley and his Royal entourage always present at various FMCC events",
       
      }
    },
   
    {
      image: 'assets/mbando pictures fix/200A5108.jpg',
      alt: 'modern sunglasses',
      content: {
       
        title: 'Cultural Dances and perfomances from the Fako people',
       
      }
    },
   
    {
      image: 'assets/mbando pictures fix/200A5449.jpg',
      alt: 'new fashion summer sale',
      content: {
        subtitle: 'Sale Offer',
        title: 'Football friendly matches, between several fako teams, blessed by the presence of the paramount cheif himself',
       
      }
    },
     
    {
      image: 'assets/Mbando/3D4A9376.JPG',
      alt: "women's latest fashion sale",
      content: {
        subtitle: 'Trending item',
        title: "Event Hosting grounds, with multiple partipants, A day for CULTURE!",
       
      }
    },
   
    {
      image: 'assets/Mbando/3D4A9380.JPG',
      alt: 'modern sunglasses',
      content: {
       
        title: 'Friendly Associations between the elderly, so much love and respect among the fako people',
       
      }
    },
   
    {
      image: 'assets/Mbando/3D4A9505.JPG',
      alt: 'new fashion summer sale',
      content: {
        
        title: 'Cultural Events Happily celebrated with friends and loved ones, to remind us of our roots',
       
      }
    }
  ];

  cultureSlides = [
    
    {
      image: 'assets/mbando small size pix/DSC04446.jpg',
      alt: "women's latest fashion sale",
      content: {
        
        title: "Women's latest fashion sale",
       
      }
    },
   
   
    {
      image: 'assets/mbando small size pix/DSC04423.jpg',
      alt: "women's latest fashion sale",
      content: {
        subtitle: 'Trending item',
        title: "Women's latest fashion sale",
       
      }
    },
     {
      image: 'assets/mbando small size pix/DSC04428.jpg',
      alt: "women's latest fashion sale",
      content: {
        subtitle: 'Trending item',
        title: "Women's latest fashion sale",
       
      }
    },
     {
      image: 'assets/mbando small size pix/DSC04444.jpg',
      alt: "women's latest fashion sale",
      content: {
        subtitle: 'Trending item',
        title: "Women's latest fashion sale",
       
      }
    },
     {
      image: 'assets/mbando small size pix/DSC04449.jpg',
      alt: "women's latest fashion sale",
      content: {
        subtitle: 'Trending item',
        title: "Women's latest fashion sale",
       
      }
    },
     {
      image: 'assets/mbando small size pix/DSC04495.jpg',
      alt: "women's latest fashion sale",
      content: {
        subtitle: 'Trending item',
        title: "Women's latest fashion sale",
       
      }
    },
  
  ];

  gallery = [
    {
      title: 'Fako Division',
      caption: 'A land of natural beauty and strong traditions.',
       url: 'assets/mbando small size pix/DSC04331.jpg'
    },
    {
      title: 'FMCC - Fako Cultural Centre',
      caption: 'A hub for community empowerment and cultural events.',
       url: 'assets/Mbando/3D4A9376.JPG'
    },
   
    {
      title: 'Traditional Dance',
      caption: 'Experience the rhythm of Fako’s heritage.',
      url: 'assets/mbando small size pix/DSC04348.jpg'
    },
    {
      title: 'Chiefs and Cultural Leaders',
      caption: 'The backbone of indigenous governance.',
      url: 'assets/mbando small size pix/DSC04403.jpg'
    },
     {
      title: 'Mbando Ya Hvako Festival',
      caption: 'Celebrating unity, ancestral rites, and tradition.',
      url: 'assets/mabado cultural.PNG'
    },
  ];

  currentSlide = 0;
  intervalId: any;
  
  
  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.culturalSlides.length;
    }, 8000);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
  
  ngOnDestroy() {
    clearInterval(this.intervalId);}

 goToBlog(){
   
    this.router.navigate(['/blog']);

  }
  
   

 }
