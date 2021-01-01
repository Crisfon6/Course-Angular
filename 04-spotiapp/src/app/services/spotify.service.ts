import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService{
  
  constructor(
    private _http:HttpClient
  ) { 
  }
 
  token: string;
  tokenType: string;
 async  getQuery2(query: string): Promise<Observable<any>> {

   if(!this.token){
     await this.getToken()
     .then((data: any ) => {
       console.log("ASYNQUERY DATA",{data});
       this.token = data.access_token;
       console.log("ASYNQUERY TOKEN "+this.token);
      this.tokenType = data.token_type;
      
        });
    }
    const url = `https://api.spotify.com/v1/${ query }`;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer '+this.token);
    console.log("HEADERS",headers);
    return this._http.get(url, { headers });
  }
   async getNewReleases() {
  return  await this.getQuery2('browse/new-releases?limit=20')
  .then((obs : Observable<any>) =>{
      console.log("NEW REALESES", obs);
      return obs.pipe(
        map( data => data['albums'].items )
      );
    }).catch(()=>{
      this.token= null;
      this.getNewReleases();
    });
  }
  async getArtists(term:string){
    return  await this.getQuery2(`search?q=${ term }&type=artist&limit=15`)
    .then((obs : Observable<any>) =>{
        
        return obs.pipe(map((data:any)=> data.artists.items));
      }).catch(()=>{
        this.token= null;
        this.getNewReleases();
      });
  }
  async getArtist(term:string){
    return  await this.getQuery2(`artists/${term}`)
    .then((obs : Observable<any>) =>{
        
        return obs;
      }).catch(()=>{
        this.token= null;
        this.getNewReleases();
      });
    
   
  }
  async getTopTracks(term:string){
    return  await this.getQuery2(`artists/${term}/top-tracks?country=US`)
    .then((obs : Observable<any>) =>{
        
        return obs .pipe(map(data=> data['tracks']));
      }).catch(()=>{
        this.token= null;
        this.getNewReleases();
      });
    
     
  
  }
 async getToken(): Promise<any>{
    const clientSecret  = '74b7c0645b8490fa10f50f2a3450028';
    const clientId = '567b16dfd234132942483002be41bc0';
    const url = 'http://127.0.0.1:3000/spotify/';    
    return await this._http.get(url + `${clientId}/${clientSecret}`).toPromise();
  }
}
