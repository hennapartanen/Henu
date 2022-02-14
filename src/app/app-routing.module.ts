import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { GalleryComponent } from './gallery/gallery.component'; 
import { GalleryStartComponent } from './gallery/gallery-start/gallery-start.component'; 
import { GalleryEditComponent } from './gallery/gallery-edit/gallery-edit.component'; 
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component'; 
import { GalleryItemitComponent } from './gallery-itemit/gallery-itemit.component';
import { GalleryItemitStartComponent } from './gallery-itemit/gallery-itemit-start/gallery-itemit-start.component';
import { GalleryItemitEditComponent } from './gallery-itemit/gallery-itemit-edit/gallery-itemit-edit.component';
import { GalleryItemitDetailComponent } from './gallery-itemit/gallery-itemit-detail/gallery-itemit.detail.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [ 

  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, 
  { path: 'auth', component: AuthComponent }, 
  { path: 'gallery', component: GalleryComponent, children: [ 
    { path: '', component: GalleryStartComponent }, 
    { path: 'new', component: GalleryEditComponent }, 
    { path: ':id', component: GalleryDetailComponent }, 
    { path: ':id/edit', component: GalleryEditComponent }, 
    { path: ':id/gategory', component: GalleryItemitComponent },
    { path: ':id/gategory/new', component: GalleryItemitEditComponent },
    { path: ':id/gategory/id', component: GalleryItemitDetailComponent },
    { path: ':id/gategory/id/edit', component: GalleryItemitEditComponent },
  ] }, 



 ]; 

 
 

@NgModule({ 
  imports: [RouterModule.forRoot(appRoutes)], 
  exports: [RouterModule] 

}) 

export class AppRoutingModule { } 

 