import { NgModule } from '@angular/core';
import { FilterFinishedPipe } from './filter-finished.pipe';




@NgModule({
  declarations: [FilterFinishedPipe],
  exports:[
    FilterFinishedPipe
  ],
  imports: [
    
  ]
})
export class PipesModule { }
