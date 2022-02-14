import { Component, OnInit } from '@angular/core';
import { Item } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  selectedItem: Item;
  
  constructor() { }

  ngOnInit(): void {
  }

}
