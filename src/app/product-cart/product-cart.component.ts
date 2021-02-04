import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
id:any;
product:any;
  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this._route.snapshot.params.id;
this._httpClient.get('http://localhost:3000/products?productid='+this.id).subscribe(result=>{
this.product = result;
console.log(this.product);
},
errors=>{console.log(errors);
})
}
}

