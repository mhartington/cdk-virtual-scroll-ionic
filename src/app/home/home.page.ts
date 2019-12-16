import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  items: number[];
  itemSize: number;
  constructor(private plt: Platform) {
    this.itemSize = this.plt.is('ios') ? 44 : 56;
  }
  ionViewDidEnter() {
    this.items = Array.from(new Array(500).keys());
  }
  trackByFn(index: number) {
    return index;
  }
}
