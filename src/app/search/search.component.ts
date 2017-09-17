import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'oas-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public animationOnComponentEnter = 'route-enter-staggered';
  // MdPaginator Inputs
  public length = 100;
  public pageSize = 6;
  public pageSizeOptions = [6, 12, 24, 50];
  public pageEvent: PageEvent;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initPaginator();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
  }

  private initPaginator() {
    this.pageEvent = new PageEvent;
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = this.pageSize;
  }

  paginationFrom(pageEvent) {
    return ((pageEvent.pageIndex === 0) ? pageEvent.pageIndex : (pageEvent.pageIndex) * pageEvent.pageSize );
  }

  paginationTo(pageEvent) {
    return this.paginationFrom(pageEvent) + this.pageSize;
  }

}
