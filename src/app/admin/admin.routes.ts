// src/app/admin/admin.routes.ts
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationsComponent } from './donations/donations.component';


import { UpcomingComponent } from './upcoming/upcoming.component';


import { ContComponent } from './cont/cont.component';
import { NoteComponent } from './note/note.component';

export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'donations', component: DonationsComponent },
          { path: 'note', component: NoteComponent },
         
          { path: 'up', component: UpcomingComponent },
          { path: 'blo', component: BlogsComponent },
          { path: 'cont', component: ContComponent},
        ]
      }
];
