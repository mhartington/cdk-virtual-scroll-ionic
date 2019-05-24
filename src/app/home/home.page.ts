import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  itemSize
  constructor(private plt: Platform){}
  public items = Array.from({length: 1000}).map((_, i) => `Item #${i}`);
  ngOnInit(){
    this.itemSize = this.plt.is('ios') ? 44 : 56;
   console.log(this.items)
  }
  trackByFn(index) {
    return index;
  }
}

