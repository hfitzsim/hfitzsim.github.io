import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { WebworkComponent } from './component/webwork/webwork.component';
import { ResumeComponent } from './component/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    WebworkComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
