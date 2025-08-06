import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBlogComponent } from './sub-blog.component';

describe('SubBlogComponent', () => {
  let component: SubBlogComponent;
  let fixture: ComponentFixture<SubBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
