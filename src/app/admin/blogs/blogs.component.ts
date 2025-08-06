import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogService, Blog } from '../../services/blog.service';


@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogPosts: Blog[] = [];
  editMode = false;
  currentBlog: Blog = {
    title: '',
    author: '',
    date: '',
    description: '',
    image: null,
    image_url: ''
  };

  constructor(private svc: BlogService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.list().subscribe(res => this.blogPosts = res);
  }

  saveBlog() {
    if (this.editMode && this.currentBlog.id != null) {
      this.svc.update(this.currentBlog.id, this.currentBlog).subscribe(() => this.load());
    } else {
      this.svc.add(this.currentBlog).subscribe(() => this.load());
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editMode = false;
    this.currentBlog = {
      title: '',
      author: '',
      date: '',
      description: '',
      image: null,
      image_url: ''
    };
  }

  deleteBlog(i: number) {
    const id = this.blogPosts[i].id;
    if (id != null && confirm('Delete this blog post?')) {
      this.svc.delete(id).subscribe(() => this.load());
    }
  }

  startEdit(i: number) {
    this.editMode = true;
    const blog = this.blogPosts[i];
    // Clone the blog object to avoid mutating the list directly
    this.currentBlog = { ...blog, image: null };
  }

  onImageSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.currentBlog.image = input.files[0];
    }
  }
}
