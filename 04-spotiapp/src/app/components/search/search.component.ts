import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists:any[] = [];
  loading:boolean;
  error:boolean;
  errorMsg='';
  constructor(
    private _spotifyService:SpotifyService
  ) {
    
   }

  ngOnInit(): void {
  }
  async  search(term:string){
    this.loading=true;
    await this._spotifyService.getArtists(term).then((d:Observable<any>)=>{
      console.log("COMOPONENT",d);
      d.subscribe(data=>{
        this.artists=data;
        this.loading=false;
      this.loading=false;
      },(err:any)=>{
      this.error=true;
      this.loading=false;
      this.errorMsg = err.error.error.message;
      });
    });
    
  }
}
