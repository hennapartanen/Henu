import { Component, OnInit } from '@angular/core';
import { Item } from './gallery-itemit.model';

@Component({
  selector: 'app-gallery-itemit',
  templateUrl: './gallery-itemit.component.html',
  styleUrls: ['./gallery-itemit.component.css']
})
export class GalleryItemitComponent implements OnInit {
  selectedItem: Item;
  
  constructor() { }

  ngOnInit(): void {
  }

}
