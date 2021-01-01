import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-clases',
  templateUrl: './ng-clases.component.html'  
})
export class NgClasesComponent{
  public  alerta:string = "alert-danger";
  public properties = {
    danger:true
  };
  loading:boolean = false;
  constructor() { }
  execute(){
    this.loading=true;
    setTimeout(()=>this.loading=false,3000);
  }
  

}
