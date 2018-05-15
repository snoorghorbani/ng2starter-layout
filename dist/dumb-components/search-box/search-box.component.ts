import { Component, OnInit } from '@angular/core';

@Component({
        selector: 'app-search-box',
        template: `<div class="search-box">   <!--<td-search-box class="search-box-container" backIcon="arrow_back" placeholder="جستجو" [showUnderline]="false" [debounce]="500" [alwaysVisible]="false"                  (searchDebounce)="searchInputTerm = $event" (search)="searchInputTerm = $event" (clear)="searchInputTerm = ''">   </td-search-box>--> </div>`,
        styles: [``]
})
export class SearchBoxComponent implements OnInit {

        constructor() { }

        ngOnInit() {
        }

}