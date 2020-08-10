import { SnackbarComponent } from './../../common/snackbar/snackbar.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface AddressData {
  name: string;
  address: string;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {
  cartItems = [
    { productName:'Artificial Inteligence', image:'./assets/images/jph_1.jpg', publication:'JPH', sem:6, actualPrice:120, ourPrice:110, quantity:2, total: 220 },
    { productName:'DAA', image:'./assets/images/jph_2.jpg', publication:'Alok', sem:4, actualPrice:120, ourPrice:100, quantity:1, total: 100 },
    { productName:'Math 3', image:'./assets/images/jph_3.jpg', publication:'Alok', sem:4, actualPrice:120, ourPrice:100, quantity:1, total: 100 },
    { productName:'Ultra JAVA', image:'./assets/images/jph_4.jpg', publication:'Alok', sem:4, actualPrice:620, ourPrice:500, quantity:1, total: 500 }

  ]

  charges = [
    {name:'Shipping', percentage: 20, value: 20, use: true },
    {name:'Offer', percentage: 10, value: 10, use: false }
  ]

  orderTotal = 930

  myAddress: AddressData[] = [
    {name: 'Home', address: 'plot-60/3, road-9, Magaveer Nangar'},
    {name: 'Bramhos Bhawan', address: 'Room- 206,block-c'},
    {name: 'Rohini Bhawan', address: 'Room- 306,block-b'},
    {name: 'White House', address: 'Room- 313,block-a'},
  ]
  selectedAddress = this.myAddress[1].name

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000,
      data: {
        message:'Applied',
        isSuccess:true
      }
    });
  }

  scrollTo(id:string){
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }

}
