import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'; 

import { Item } from '../../gallery-itemit.model'; 

 
 
 

@Component({ 

  selector: 'app-gallery-itemit-item', 
  templateUrl: './gallery-itemit-item.component.html', 
  styleUrls: ['./gallery-itemit-item.component.css'] 

}) 

export class GalleryItemitItemComponent implements OnInit { 
  @Input() item: Item; 
  @Input() index: number; 


  ngOnInit() { 

  } 

} 