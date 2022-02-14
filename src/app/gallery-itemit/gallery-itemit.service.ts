import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Item } from './gallery-itemit.model';

@Injectable()
export class GalleryItemitService {
  itemsChanged = new Subject<Item[]>();

  private items: Item[] = [
    new Item('Tytti L', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/takkaleivinuunit/TYTTI.jpg'),
    new Item('Tiina L', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/takkaleivinuunit/TIINAL.jpg'),
    new Item('Taina L', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/takkaleivinuunit/TAINA.jpg'),
    new Item('Tanja L', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/takkaleivinuunit/TANJA.jpg'),
    new Item('Tiina P', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/takkaleivinuunit/TIINAP.jpg'),
    new Item('Eetu L', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/takkaleivinuunit/EETUL.jpg'),
    
  ];

  constructor() {}

  getItems() {
    return this.items.slice();
  }

  getItem(index: number) {
    return this.items[index];
  }

  addItem(item: Item) {
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }

  updateItem(index: number, newItem: Item) {
    this.items[index] = newItem;
    this.itemsChanged.next(this.items.slice());
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }
}
