import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { AuthComponent } from './auth/auth.component'; 
import { GalleryComponent } from './gallery/gallery.component'; 
import { HomepageComponent } from './homepage/homepage.component'; 
import { GalleryStartComponent } from './gallery/gallery-start/gallery-start.component'; 
import { GalleryEditComponent } from './gallery/gallery-edit/gallery-edit.component'; 
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component'; 

 
 

const appRoutes: Routes = [ 

 
 

  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, 
  { path: 'gallery', component: GalleryComponent, children: [ 
    { path: '', component: GalleryStartComponent }, 
    { path: 'new', component: GalleryEditComponent }, 
    { path: ':id', component: GalleryDetailComponent }, 
    { path: ':id/edit', component: GalleryEditComponent }, 
  ] }, 

 ]; 

 
 

@NgModule({ 
  imports: [RouterModule.forRoot(appRoutes)], 
  exports: [RouterModule] 

}) 

export class AppRoutingModule { } 

 