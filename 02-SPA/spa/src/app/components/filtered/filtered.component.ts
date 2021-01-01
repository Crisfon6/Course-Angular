import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService ,Hero} from '../../services/heroes.services';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent implements OnInit {
  public heroes:Hero[];
  
  public filter: string;
  constructor(
    private _activeRoute :ActivatedRoute,
    private _serviceHeroes: HeroesService,
    private _router :Router
  ) { 
    
    
  }

  ngOnInit(): void {
    const name = this._activeRoute.params.subscribe(param=>{
      if(param['hero']){
        this.filter = param['hero'];
        this.heroes  = this._serviceHeroes.search(param['hero']);        
      }      
    });   
  }
  

}
