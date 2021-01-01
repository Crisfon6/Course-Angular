import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Listt } from 'src/app/models/list.model';
import { DesiresService } from '../../services/desires.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  
  constructor( private desireService: DesiresService,private router:Router,private alertCtrl : AlertController) { 
    this.router = router;
  }
  @ViewChild(IonList) list : IonList;

  @Input () finished=true;
  ngOnInit() {}
 
  goToList(id:string | number){
      const idList = Number(id);
      if(this.finished){

        this.router.navigateByUrl(`/tabs/tab2/add/${idList}`);
      }else{
        this.router.navigateByUrl(`/tabs/tab1/add/${idList}`);
      }
  }
  removeList(list:Listt){
  this.desireService.removeList(list);
  }
  async editNameList(list:Listt){
    const alert = await this.alertCtrl.create({
      header: 'New List',
      inputs: [{
        name:'title',
        type: 'text',
        value:list.title,
        placeholder:'list name'
      }],
      buttons: [{
        text: 'Cancel',
        role:'cancel',
        handler: ()=>{
          console.log('Cancel');
          this.list.closeSlidingItems();
        }
      },
      {
        text: 'Edit',
        
        handler: (data:Listt)=>{
          if (data.title.length ===0){
            return;
          }
         list.title=data.title;
         this.desireService.saveStorage();
         this.list.closeSlidingItems();
        }
      }

    ]

      
    });
    alert.present();
  }
}
