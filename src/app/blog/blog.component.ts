import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

import {  ViewChild, ElementRef, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Blog, BlogService } from '../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [HeaderComponent,CommonModule, FormsModule, FooterComponent],
  templateUrl: './blog.component.html',
styleUrls: ['./blog.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BlogComponent implements OnInit{
 blogPosts: Blog[] = [];
   currentBlog: Blog = {
       id: 0,
      title: '',
      author: '',
      date: '',
      description: '',
      image: null,
      image_url: ''
    };
  
    constructor(private svc: BlogService , private router: Router) {}
  
   
  
    load() {
      this.svc.list().subscribe(res => this.blogPosts = res);
    }
  
   saveBlog() {
  if (this.currentBlog.title && this.currentBlog.author && this.currentBlog.date && this.currentBlog.description && this.currentBlog.image) {
    this.svc.add(this.currentBlog).subscribe(() => {
      this.load();
      alert("Blog submitted successfully!");
    });
  } else {
    alert("Please complete all fields before submitting.");
  }
}

  goToBlog(id:number | undefined){
    if(id === undefined) return;
    console.log('Navigating to blog id:', id);
    this.router.navigate(['/blogdet', id]);

  }
  
  
    
  
    onImageSelect(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    this.currentBlog.image = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.currentBlogPreview = {
        title: this.currentBlog.title,
        author: this.currentBlog.author,
        date: this.currentBlog.date,
        description: this.currentBlog.description,
        imageUrl: reader.result as string
      };
    };
    reader.readAsDataURL(file);
  }
}

  

  scrollBlogs(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 320;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
  userBlog = {
    title: '',
    author: '',
    date: '',
    description: '',
    image: null,
  };

  currentBlogPreview: any = null;

  

  submitUserBlog() {
    if (
      this.userBlog.title &&
      this.userBlog.author &&
      this.userBlog.date &&
      this.userBlog.description &&
      this.userBlog.image
    ) {
      alert("Blog submitted! (Mock - save to backend here)");
      // Reset if needed:
      // this.userBlog = { title: '', author: '', date: '', description: '', image: null };
    } else {
      alert("Please complete all fields before submitting.");
    }
  }

   currentSlide = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % 4;
    }, 5000);
    this.load();
  }
   @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }
  searchTerm = '';
  selectedFilter = 'All';
   expandedCardTitle: string | null = null;

  readMore(title: string) {
    this.expandedCardTitle = this.expandedCardTitle === title ? null : title;
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }

  onSearch() {
    // You can enhance this for highlighting results if needed.
  }
}
