import { Component } from '@angular/core';
import { NgOptimizedImage,CommonModule  } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';


@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage,CommonModule,RouterModule,
    MatSidenavModule ,MatIconModule ,MatButtonModule ,MatBadgeModule
   ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  unread = 4;

  


}
