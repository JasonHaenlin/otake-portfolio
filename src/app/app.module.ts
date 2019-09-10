import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShadowBallComponent } from './utility/shadow-ball/shadow-ball.component';
import { HomeHeaderComponent } from './home-page/home-header/home-header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShadowBallComponent,
    HomeHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
