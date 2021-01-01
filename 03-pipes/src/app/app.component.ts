import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="American captain";
  name2:string= "CriTHian FOnSeca";
  setup = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  percent:number = 0.324;
  salary: number = 12345;
  hero = {
    name:"logan",
    pass:'Wolverine',
    age:400,
    address:{
      stree:3,
      house:20
    }
  };
  valuePromise = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve('Arrive data');
    },4000);
  });
  date:Date = new Date();
  video:string = "https://www.youtube.com/embed/3t195yz9xCc";
  activate:boolean =true;
  pswd:string ="CAPI"
  activatePsw(){
    this.activate = !this.activate;
  }
}
