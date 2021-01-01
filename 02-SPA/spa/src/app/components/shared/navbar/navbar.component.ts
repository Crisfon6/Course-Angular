import { Component, OnInit } from '@angular/core';
import { HeroesService,Hero } from '../../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _heroService:HeroesService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
  search(name:string){
    
   this._router.navigate(['/filter',name]);
 
  }

}
