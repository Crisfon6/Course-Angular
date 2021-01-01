import { Component } from '@angular/core';
import { DesiresService } from '../../services/desires.service';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListItem } from '../../models/list-item.model';
import { Listt } from 'src/app/models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(public desireService: DesiresService,private router:Router,private alertCtrl : AlertController) {    

  }
  async addList(){
    const alert = await this.alertCtrl.create({
      header: 'New List',
      inputs: [{
        name:'title',
        type: 'text',
        placeholder:'list name'
      }],
      buttons: [{
        text: 'Cancel',
        role:'cancel',
        handler: ()=>{
          console.log('Cancel');
        }
      },
      {
        text: 'Create',
        
        handler: (data:Listt)=>{
          if (data.title.length ===0){
            return;
          }
          const Listid =  this.desireService.createList(data.title);
           this.router.navigateByUrl(`/tabs/tab1/add/${Listid}`) ;
        }
      }

    ]

      
    });
    alert.present();
  }
  goToList(id:string | number){
    const idList = Number(id);
    this.router.navigateByUrl(`/tabs/tab1/add/${idList}`);
  }

}
