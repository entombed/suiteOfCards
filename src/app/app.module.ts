import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { SidebarModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { AppMainAreaBlockComponent } from './app-main-area-block/app-main-area-block.component';
import { AppWordsBlockComponent } from './app-words-block/app-words-block.component';
import { AppRobotPageComponent } from './app-robot-page/app-robot-page.component';
import { AppBlock01RobotComponent } from './app-robot-page/app-block-01-robot/app-block-01-robot.component';
import { AppBlock02RobotComponent } from './app-robot-page/app-block-02-robot/app-block-02-robot.component';
import { AppBlock03RobotComponent } from './app-robot-page/app-block-03-robot/app-block-03-robot.component';
import { AppAboutMePageComponent } from './app-about-me-page/app-about-me-page.component';
import { AppBlock01AboutMeComponent } from './app-about-me-page/app-block-01-about-me/app-block-01-about-me.component';
import { AppBlock02AboutMeComponent } from './app-about-me-page/app-block-02-about-me/app-block-02-about-me.component';
import { AppBlock03AboutMeComponent } from './app-about-me-page/app-block-03-about-me/app-block-03-about-me.component';




const appRoutes: Routes =[
  { path: '', component: AppMainPageComponent},
  { path: 'robot', component: AppRobotPageComponent},
  { path: 'about-me', component: AppAboutMePageComponent},
];

@NgModule({
    declarations: [
      AppBlock01RobotComponent,
      AppBlock02RobotComponent,
      AppMainPageComponent,
      AppRobotPageComponent,
      AppWordsBlockComponent,
      AppMainAreaBlockComponent,
      AppAboutMePageComponent,
      AppBlock03RobotComponent,
      AppComponent,
      AppBlock01AboutMeComponent,
      AppBlock02AboutMeComponent,
      AppBlock03AboutMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PanelModule,
    DragDropModule,
    ButtonModule,
    InputTextareaModule,
    SidebarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
