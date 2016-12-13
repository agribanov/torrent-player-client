import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import appRoutes from './app.routes';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './components/app/app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

import { UtilsService } from './services/utils.service';
import { VideoJsPlayerDirective } from './directives/video-js-player.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent
    // VideoJsPlayerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    appRoutes
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
