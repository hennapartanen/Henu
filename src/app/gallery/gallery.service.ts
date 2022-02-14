import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Item } from './gallery.model';

@Injectable()
export class GalleryService {
  itemsChanged = new Subject<Item[]>();

  private items: Item[] = [
    new Item('Takkaleivinuunit', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/takkaleivinuunit/TYTTI.jpg'),
    new Item('Kulmatakat', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/kulmatakat/MIIA.jpg'),
    new Item('Kulmatakka-leivinuunit', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/kulmatakka-leivinuunit/SATUL.jpg'),
    new Item('Leivinuunit', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/leivinuunit/PAISTOS.jpg'),
    new Item('Takkauunit', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/takkauunit/HUGO.jpg'),
    new Item('Hellat', 'This is simply a test', 'http://www.suomeneurouuni.fi/assets/images/hellat/HETA.jpg'),
    
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
