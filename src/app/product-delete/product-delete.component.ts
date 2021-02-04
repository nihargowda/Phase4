import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  id:any;
  product:any;
    constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router:Router) { }
  
    ngOnInit(): void {
      this.id =this._route.snapshot.params.id;
  this._httpClient.get('http://localhost:3000/products?productid='+this.id).subscribe(result=>{
  this.product = result;
  console.log(this.product);
  },
  errors=>{console.log(errors);
  })
}
  DeleteProduct(){
    
    
    this._router.navigate(['/admin-products']);
   this._httpClient.delete('http://localhost:3000/products?productid=1').subscribe(result=>{
   this.product = result;
   alert('product successfully deleted')
  console.log(this.product);
  this._router.navigate(['/admin-products']);
  },
  errors=>{console.log(errors);
  })
}}