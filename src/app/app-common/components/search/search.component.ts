import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

import { SearchService } from '../../services/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.sass']
})
export class SearchComponent implements AfterViewInit, OnDestroy {
    @Input() searchRoute: string;
    @ViewChild('searchInput') inputElRef: ElementRef;
    private eventSubscription: Subscription;

    value: string;

    constructor(private searchService: SearchService, private router: Router) { }

    ngAfterViewInit() {
        this.eventSubscription = Observable.fromEvent(this.inputElRef.nativeElement, 'keyup')
            .debounceTime(500)
            .map((keyboardEvent: any) => keyboardEvent.target.value)
            .subscribe(value => {
                this.router.navigate([this.searchRoute, value]);
                // this.searchService.setSearchValue(value);
            });
    }

    ngOnDestroy() {
        if (!this.eventSubscription.closed) { this.eventSubscription.unsubscribe(); }
    }

    clearSearch() {
        this.inputElRef.nativeElement.value = '';
        // this.searchService.setSearchValue(this.value);

    }

}
