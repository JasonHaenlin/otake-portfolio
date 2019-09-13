import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShadowBallComponent } from './utility/shadow-ball/shadow-ball.component';
import { HomeHeaderComponent } from './home-page/home-header/home-header.component';
import { HomeProjectComponent } from './home-page/home-project/home-project.component';
import { HomeTimelineComponent } from './home-page/home-timeline/home-timeline.component';
import { TimeCardComponent } from './utility/time-card/time-card.component';
import { HomeLanguageComponent } from './home-page/home-language/home-language.component';
import { LangageAchievementComponent } from './utility/langage-achievement/langage-achievement.component';
import { HomeHobbiesComponent } from './home-page/home-hobbies/home-hobbies.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShadowBallComponent,
    HomeHeaderComponent,
    HomeProjectComponent,
    HomeTimelineComponent,
    TimeCardComponent,
    HomeLanguageComponent,
    LangageAchievementComponent,
    HomeHobbiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
