import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
  
})
export class ArtistComponent implements OnInit {
  artist:any={};
  topTracks:any[]=[];
  loading:boolean;
  error:boolean;
  errorMsg:string='';
  id:string;
  constructor(
    private router:ActivatedRoute,
    private spotifyService:SpotifyService
  ) {
    this.loading=true;
     this.router.params.subscribe(params=>{
       this.id=params['id'];
     })
   }

 async  ngOnInit() {
  await this.spotifyService.getArtist(this.id).then((d:Observable<any>)=>{
    console.log("COMOPONENT",d);
    d.subscribe(data=>{
      console.log("ARTIST",data);
      this.artist=data;
      this.loading =false;      
      console.log("ARTIST COMPONENT INFO",this.artist);
    },(err:any)=>{
          this.error=true;
    this.loading=false;
    this.errorMsg = err.error.error.message;
    });
  });
  await this.spotifyService.getTopTracks(this.id).then((d:Observable<any>)=>{
    console.log("COMOPONENT",d);
    d.subscribe(data=>{
      console.log("DATA MUSIC",data);
      this.artist=data;
      this.loading =false;
    this.loading=false;
    },(err:any)=>{
          this.error=true;
    this.loading=false;
    this.errorMsg = err.error.error.message;
    });
  });
   
      
    
  }

}
