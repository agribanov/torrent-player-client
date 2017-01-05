import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppTopToolbarComponent } from './components/app-top-toolbar/app-top-toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AppTopToolbarComponent, SearchComponent],
  declarations: [AppTopToolbarComponent, SearchComponent],
  providers: [SearchService]
})
export class AppCommonModule { }
