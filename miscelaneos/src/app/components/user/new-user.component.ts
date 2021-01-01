import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `
  
})
export class NewUserComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 
    this.router.parent.params.subscribe(url=>{
      console.log("RUTA HIJO")
      console.log(url )
    })
  }

  ngOnInit(): void {
  }

}
