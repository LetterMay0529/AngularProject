import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent{
  dec = "Decrement"
  inc = "Increment"
  quantity:number=1;
  random_number=1;
  add(){
      this.random_number+=Math.floor(Math.random()*10);
      this.quantity=this.random_number;

  }
  sub(){
    this.random_number-=Math.floor(Math.random()*10);
      this.quantity=this.random_number;
  }

}
