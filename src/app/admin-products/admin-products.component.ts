import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  productList:any;
  id:any;
  constructor(private _httpClient: HttpClient,private _route:ActivatedRoute, private _router:Router) { }
  

  ngOnInit(): void {
   
    this._httpClient.get("http://localhost:3000/products").subscribe(result=>{
      this.productList=result;
    console.log(this.productList);
    },errors=>{console.log(errors);
    })
  }

}