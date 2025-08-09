

import { ViewChild, ElementRef, OnInit, Component } from '@angular/core';
import { Blog, BlogService } from '../services/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sub-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-blog.component.html',
  styleUrl: './sub-blog.component.css'
})
export class SubBlogComponent implements OnInit {
  blogPosts: Blog[] = [];
  currentBlog: Blog = {
    title: '',
    author: '',
    date: '',
    description: '',
    image: null,
    image_url: ''
  };
  
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  
  constructor(private svc: BlogService) {}
  
  load() {
    this.svc.list().subscribe((res: Blog[]) => {
      this.blogPosts = res;
    });
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
  
  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }
}
