import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesiresService } from '../../services/desires.service';
import { Listt } from '../../models/list.model';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  list:Listt;
  itemName :string;
   constructor(private desiresService :DesiresService,
    private route :ActivatedRoute) {
      const listId = this.route.snapshot.paramMap.get('listId');
      this.list  = this.desiresService.getList(listId);
     }

  ngOnInit() {
  }
  addItem(){
  if (this.itemName.length ===0){
    return;    
  }
  const newItem = new ListItem(this.itemName);
  this.itemName = '';
  this.list.items.push(newItem);
  this.desiresService.saveStorage();
  }
  checkChange(item:ListItem){    
    const slopes = this.list.items.filter(itemData=> !itemData.completed    )
      .length;
      if (slopes===0){
this.list.endAt = new Date();
this.list.finished = true;
      }else{
        this.list.endAt = null;
this.list.finished = false;
      }

      this.desiresService.saveStorage();

  }
  remove(i:number){
  this.list.items.splice(i,1);
  this.desiresService.saveStorage();
  }
}
