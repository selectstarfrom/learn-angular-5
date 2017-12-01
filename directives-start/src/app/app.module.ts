import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FontColor } from './highlighter/fontColor.directive';
import { BackgroundColor } from './highlighter/backgroundColor.directive';

@NgModule({
  declarations: [
    AppComponent,
    FontColor,
    BackgroundColor,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
