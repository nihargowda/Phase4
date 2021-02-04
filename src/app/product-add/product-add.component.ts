import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pro } from './../models/product'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

products:Pro = new Pro;
  constructor(private _httpClient:HttpClient , private _router: Router) { }

  ngOnInit(): void {
  }
addProduct(){
  alert('Product Added successfully');
  console.log(this.products);
  
  this._router.navigate(['/admin-products']);
  this._httpClient.post('http://localhost:3000/products', this.products).subscribe(result=>
  {
    
    console.log(this.products);
  
  },
  errors=>{
    console.log(errors);
  }
  )
}
}
