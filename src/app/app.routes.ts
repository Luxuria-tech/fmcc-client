import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ContactsComponent } from './contacts/contacts.component';
import { CulturalComponent } from './cultural/cultural.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DonateComponent } from './donate/donate.component';
import { BlogDetComponent } from './blog-det/blog-det.component';



export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.routes').then(m => m.adminRoutes)
      },
    {path: '', component:HomeComponent
    },
    {path: 'blogdet/:id', component:BlogDetComponent
    },
    {path: 'notify', component:NotificationsComponent
    },
    {path: 'donate', component:DonateComponent
    },
    
    {path: 'contacts', component:ContactsComponent
    },
    {path: 'cultural', component:CulturalComponent
    },
    {path: 'about', component:AboutComponent
    },
    {path: 'blog', component:BlogComponent
    },
    {path: 'notification', component:NotificationsComponent
    },
];
