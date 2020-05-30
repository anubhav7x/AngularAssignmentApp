import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/modules/Home/home.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { HeroComponent } from '../app/components/hero/hero.component';
import { CardComponent } from '../app/components/cards/card.component';
import { FooterComponent } from '../app/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
