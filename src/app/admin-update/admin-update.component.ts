import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
Update(){
  alert('Password Update Successull')
  this._router.navigate(['/admin']);

}
}
