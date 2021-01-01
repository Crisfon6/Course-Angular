import { Injectable } from '@angular/core';
import { Listt } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DesiresService {
   desireList : Listt[] = [];
  constructor() {
    this.loadStorage();
  }
  
  createList(title:string){
    const list1 = new Listt(title);
    this.desireList.push(list1);
    this.saveStorage();
    return list1.id;
  }
  getList(id:string| number){
    id = Number(id);
    return this.desireList.find(listData =>   listData.id === id    );
  }
  saveStorage(){
    localStorage.setItem('data',JSON.stringify(this.desireList));
  }
  loadStorage(){
    if (localStorage.getItem('data')){
    this.desireList = JSON.parse(localStorage.getItem('data'));
    
  }
  }
  removeList(list:Listt){
    this.desireList = this.desireList.filter(el=>
      el.id!= list.id
    );
    this.saveStorage();
  }

}
