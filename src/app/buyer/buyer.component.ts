import { Component } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent {
  title='buyer';

  productopen=function(){
   location.pathname=('/createorders');

}
}
