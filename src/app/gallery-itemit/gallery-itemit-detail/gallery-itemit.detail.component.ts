import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Item } from '../gallery-itemit.model';
import { GalleryItemitService } from '../gallery-itemit.service';

@Component({
  selector: 'app-gallery-itemit-detail',
  templateUrl: './gallery-itemit-detail.component.html',
  styleUrls: ['./gallery-itemit-detail.component.css']
})
export class GalleryItemitDetailComponent implements OnInit {
  item: Item;
  id: number;

  constructor(private galleryItemitService: GalleryItemitService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.item = this.galleryItemitService.getItem(this.id);
        }
      );
  }


  onEditItem() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

  onDeleteItem() {
    this.galleryItemitService.deleteItem(this.id);
    this.router.navigate(['/items']);
  }
  onCancel() { 

    this.router.navigate(['../'], {relativeTo: this.route}); 
  
  } 
  
  
}