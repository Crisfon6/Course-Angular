import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {
  @Input() hero:any;
  @Input() idx:number;
  @Output() selectHero:EventEmitter<number>;

  constructor(
    private _router:Router
  ) { 
    this.selectHero = new EventEmitter();
  }

  ngOnInit(): void {
  }
  showHero(){
    this._router.navigate(['/heroe',this.idx]);
    // this.selectHero.emit(this.idx);
  }
}
