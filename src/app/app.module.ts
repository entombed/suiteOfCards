import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { DragDropModule } from 'primeng/dragdrop';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SidebarModule } from 'primeng/sidebar';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';

import { AppComponent } from './app.component';
import { SetZindexItemService } from './services/set-zindex-item.service';
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
import { AppCommandsAndDecisionsPageComponent } from './app-commands-and-decisions/app-commands-and-decisions-page.component';
import { AppBlock01CadComponent } from './app-commands-and-decisions/app-block-01-cad/app-block-01-cad.component';
import { AppBlock02CadComponent } from './app-commands-and-decisions/app-block-02-cad/app-block-02-cad.component';
import { AppBlock03CadComponent } from './app-commands-and-decisions/app-block-03-cad/app-block-03-cad.component';
import { AppScenariosPageComponent } from './app-scenarios-page/app-scenarios-page.component';
import { AppBlock01ScenariosComponent } from './app-scenarios-page/app-block-01-scenarios/app-block-01-scenarios.component';
import { CustomPageComponent } from './custom-page/custom-page.component';

const appRoutes: Routes = [
  { path: '', component: AppMainPageComponent },
  { path: 'robot', component: AppRobotPageComponent },
  { path: 'about-me', component: AppAboutMePageComponent },
  { path: 'cad', component: AppCommandsAndDecisionsPageComponent },
  { path: 'scenarios', component: AppScenariosPageComponent },
  { path: 'custom-page', component: CustomPageComponent },
  { path: '**', component: AppMainPageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AppMainPageComponent,
    AppWordsBlockComponent,
    AppMainAreaBlockComponent,
    AppRobotPageComponent,
    AppBlock01RobotComponent,
    AppBlock02RobotComponent,
    AppBlock03RobotComponent,
    AppAboutMePageComponent,
    AppBlock01AboutMeComponent,
    AppBlock02AboutMeComponent,
    AppBlock03AboutMeComponent,
    AppCommandsAndDecisionsPageComponent,
    AppBlock01CadComponent,
    AppBlock02CadComponent,
    AppBlock03CadComponent,
    AppScenariosPageComponent,
    AppBlock01ScenariosComponent,
    CustomPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    PanelModule,
    DragDropModule,
    ButtonModule,
    InputTextareaModule,
    SidebarModule,
    CheckboxModule,
    ToolbarModule
  ],
  providers: [
    SetZindexItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
