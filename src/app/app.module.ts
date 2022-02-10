import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { ScrollDispatcher } from '@angular/cdk/scrolling'; 
import { ScrollingModule } from '@angular/cdk/scrolling'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule} from '@angular/common/http'; 
import { MatSidenavModule} from '@angular/material/sidenav'; 
import { MatListModule } from "@angular/material/list"; 
import { ReactiveFormsModule } from '@angular/forms'; 

 
 
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './header/header.component'; 
import { ContentComponent } from './content/content.component'; 
import { NavbarComponent } from './navbar/navbar.component'; 
import { GalleryDivComponent } from './gallery-div/gallery-div.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { AuthComponent } from './auth/auth.component'; 
import { AppRoutingModule } from './app-routing.module'; 
import { HomepageComponent } from './homepage/homepage.component'; 
import { GalleryComponent } from './gallery/gallery.component'; 
import { GalleryEditComponent } from './gallery/gallery-edit/gallery-edit.component'; 
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component'; 
import { GalleryItemComponent } from './gallery/gallery-list/gallery-item/gallery-item.component'; 
import { DropdownDirective } from './shared/dropdown.directive'; 
import { GalleryService } from './gallery/gallery.service'; 
import { TopicsComponent } from './topics/topics.component';
 
 
 
 

@NgModule({ 

  declarations: [ 

    AppComponent, 
    HeaderComponent, 
    NavbarComponent, 
    GalleryDivComponent, 
    ContentComponent, 
    FooterComponent, 
    AuthComponent, 
    HomepageComponent, 
    GalleryComponent, 
    GalleryEditComponent, 
   GalleryListComponent, 
    GalleryItemComponent, 
    DropdownDirective, 
  TopicsComponent
 
 

  

 
 

  ], 

  imports: [ 

    BrowserModule, 
     NgbModule, 
     BrowserAnimationsModule, 
     FlexLayoutModule, 
     MatToolbarModule, 
     MatMenuModule, 
     MatButtonModule, 
     MatIconModule, 
     MatDividerModule, 
     ScrollingModule, 
     AppRoutingModule, 
     FormsModule, 
     HttpClientModule, 
     MatSidenavModule, 
     MatListModule, 
     ReactiveFormsModule, 
     AppRoutingModule 

     

   

   

 
 
 

  ], 

  providers: [ScrollDispatcher, GalleryService], 

  bootstrap: [AppComponent] 

}) 

export class AppModule { } 

 