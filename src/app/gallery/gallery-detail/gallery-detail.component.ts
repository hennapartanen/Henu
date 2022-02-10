import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Item } from '../gallery.model';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent implements OnInit {
  item: Item;
  id: number;

  constructor(private galleryService: GalleryService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.item = this.galleryService.getItem(this.id);
        }
      );
  }


  onEditItem() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

  onDeleteItem() {
    this.galleryService.deleteItem(this.id);
    this.router.navigate(['/items']);
  }
  onCancel() { 

    this.router.navigate(['../'], {relativeTo: this.route}); 
  
  } 
  
  
}
