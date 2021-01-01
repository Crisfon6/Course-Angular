import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { HeroesComponent } from './components/heroes/heroes.component';
//routes
import { APP_ROUTING } from './app.route';
import { AboutComponent } from './components/about/about.component';
import { HeroesService } from './services/heroes.services';
import { HeroComponent } from './components/hero/hero.component';
import { FilteredComponent } from './components/filtered/filtered.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    FilteredComponent,
    CardHeroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
