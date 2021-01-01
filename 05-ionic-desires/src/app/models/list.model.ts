import { BooleanValueAccessor } from "@ionic/angular";
import { ListItem } from './list-item.model';

export class Listt{
    id:number;
    title:string;
    createAt:Date;
    endAt:Date;
    finished:boolean;
    items: ListItem[];
    constructor (title:string,){
        this.id = new Date().getTime();
        this.title = title;
        this.createAt = new Date();
        
        this.finished = false;
        this.items = [];

    }
}