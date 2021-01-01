import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';
import { DesiresService } from '../services/desires.service';
import { PipesModule } from '../pipes/pipes.module';




@NgModule({
  declarations: [
    ListsComponent
  ],//van los componets que utiliza el modulo
  exports:[
    ListsComponent
  ],  
  imports: [
    CommonModule,//trae en ngfor ngswith ngif y similares
    IonicModule,
    PipesModule
  ],
  providers:[
    
  ]
})
export class ComponentsModule { }
