import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,LOCALE_ID} from '@angular/core';

import { AppComponent } from './app.component';

//setup language location
import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { PassPipe } from './pipes/pass.pipe';

//register language
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    DomsafePipe,
    PassPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID,
    useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
