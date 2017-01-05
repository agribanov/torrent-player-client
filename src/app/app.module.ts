import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppCommonModule } from './app-common/app-common.module';

import { AppComponent } from './components/app/app.component';
import { UtilsService } from './services/utils.service';

import appRoutes from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppCommonModule,
    appRoutes
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
