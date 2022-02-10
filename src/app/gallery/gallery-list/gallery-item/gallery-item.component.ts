import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'; 

import { Item } from '../../gallery.model'; 

 
 
 

@Component({ 

  selector: 'app-gallery-item', 
  templateUrl: './gallery-item.component.html', 
  styleUrls: ['./gallery-item.component.css'] 

}) 

export class GalleryItemComponent implements OnInit { 
  @Input() item: Item; 
  @Input() index: number; 


  ngOnInit() { 

  } 

} 