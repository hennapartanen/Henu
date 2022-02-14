import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs'; 
import { Item } from '../gallery-itemit.model'; 
import { GalleryItemitService } from '../gallery-itemit.service'; 
import { AuthService } from '../../auth/auth.service'; 
 

@Component({ 
  selector: 'app-gallery-itemit-list', 
  templateUrl: './gallery-itemit-list.component.html', 
  styleUrls: ['./gallery-itemit-list.component.css'] 

}) 

export class GalleryItemitListComponent implements OnInit, OnDestroy { 
  items: Item[]; 
  isAuthenticated = false;
  subscription: Subscription; 

 
 

  constructor(private galleryItemitService: GalleryItemitService, 
              private router: Router,
              private authService: AuthService, 
              private route: ActivatedRoute) { 

  } 

 
 

  ngOnInit() { 

    this.subscription = this.galleryItemitService.itemsChanged 
      .subscribe( 
        (items: Item[]) => { 
          this.items = items; 
        } 
      ); 
    this.items = this.galleryItemitService.getItems(); 

  } 

 

  onNewItem() { 
    this.router.navigate(['new'], {relativeTo: this.route}); 
  } 



  ngOnDestroy() { 
    this.subscription.unsubscribe(); 
  } 

} 