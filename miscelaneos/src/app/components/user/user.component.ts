import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 
    this.router.params.subscribe(url=>{
      console.log("RUTA PADRE")
      console.log(url )
    })
  }

  ngOnInit(): void {
  }

}
