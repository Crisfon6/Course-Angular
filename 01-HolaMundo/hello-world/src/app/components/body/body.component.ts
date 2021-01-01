import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    phrase:any = {
        message: 'a big power have a big resposability',
        author: 'Peter Parker'
    }
    public superHeroes:string[] = ['IronMan','Deadpool','Riven'];
    public show:boolean=true;

    showFunc(){
        this.show = !this.show;
    }
}
