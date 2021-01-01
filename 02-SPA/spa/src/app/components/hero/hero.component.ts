import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService,Hero } from '../../services/heroes.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {
  hero:  Hero;
  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroService:HeroesService
  ) {
    this.activatedRoute.params.subscribe(param=>{
      
      this.hero = this._heroService.getHero(param['id']);
    });

   }

  ngOnInit(): void {
  }

}
