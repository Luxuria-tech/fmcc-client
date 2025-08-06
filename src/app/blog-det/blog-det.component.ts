import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-blog-det',
  imports: [CommonModule,FooterComponent],
  templateUrl: './blog-det.component.html',
  styleUrls: ['./blog-det.component.css']
})
export class BlogDetComponent {
  blog: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private svc: BlogService) {}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id'); 
  if (id) {
    this.svc.getBlogById(id).subscribe({
      next: (data) => {
        console.log('Blog data received:', data);
        this.blog = data;
      },
      error: (err) => console.error('Error fetching blog:', err)
    });
  }
}


  goBack() {
    this.router.navigate(['/blog']);
  }
}
