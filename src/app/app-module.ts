import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { WorkExperience } from './work-experience/work-experience';
import { Education } from './education/education';
import { Languages } from './languages/languages';
import { Skills } from './skills/skills';
import { Interest } from './interest/interest';
import { Certificates } from './certificates/certificates';

@NgModule({
  declarations: [
    App,
    Header,
    WorkExperience,
    Education,
    Languages,
    Skills,
    Interest,
    Certificates
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
