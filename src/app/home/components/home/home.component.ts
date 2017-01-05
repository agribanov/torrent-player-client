import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { SearchService } from '../../../app-common/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  searchValue: string;
  private searchSubscription: Subscription;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchSubscription = this.searchService.search.subscribe((value: string) => {
      this.searchValue = value;
    });
  }

  ngOnDestroy() {
    if (!this.searchSubscription.closed) { this.searchSubscription.unsubscribe(); }
  }

}
