import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FeaturedComponent } from './featured/featured.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'featured', pathMatch: 'full' },
  { path: 'featured', component: FeaturedComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: 'featured' } // Wildcard route for 404
];
