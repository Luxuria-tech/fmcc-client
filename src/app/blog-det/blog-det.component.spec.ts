import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetComponent } from './blog-det.component';

describe('BlogDetComponent', () => {
  let component: BlogDetComponent;
  let fixture: ComponentFixture<BlogDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
