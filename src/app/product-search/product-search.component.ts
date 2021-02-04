import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  name:any;
  product:any;
  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name =this._route.snapshot.params.name;
    this._httpClient.get('http://localhost:3000/products?productname='+this.name).subscribe(result=>{
      this.product = result;
      console.log(this.product);
      },
      errors=>{console.log(errors);
      })
      }
      }
      