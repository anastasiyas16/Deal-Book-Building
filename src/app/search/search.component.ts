import {Component, OnInit, OnDestroy} from '@angular/core';
import {YoutubeAPIService} from "../shared/youtube/youtube-api.service";
import {YoutubeInteractionService} from "../shared/youtube/youtube-interaction.service";
import {Subscription} from "rxjs";
import {Video} from "../shared/youtube/video.model";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'oas-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public animationOnComponentEnter = 'route-enter-staggered';
  private subscription: Subscription;
  public videoList: Video[] = [];
  // MdPaginator Inputs
  public length = 100;
  public pageSize = 6;
  public pageSizeOptions = [6, 12, 24, 50];
  public pageEvent: PageEvent;

  constructor(private route: ActivatedRoute, private youtubeAPIService: YoutubeAPIService) {
  }

  ngOnInit() {
    this.initPaginator();
    this.subscription = this.route.queryParams.subscribe(params => this.searchYoutubeVideos(params['query']));
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  private initPaginator() {
    this.pageEvent = new PageEvent;
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = this.pageSize;
    this.pageEvent.length = this.videoList.length;
  }

  private searchYoutubeVideos(query: string) {
    console.debug("Query received on search component: " + query);
    this.youtubeAPIService.searchVideos(query)
      .subscribe(data => {
        this.videoList = data.items.map(item => {
          return new Video(
            item.id.videoId,
            item.snippet.title,
            item.snippet.thumbnails.medium.url,
            item.snippet.thumbnails.high.url,
            item.snippet.channelTitle,
            item.snippet.channelId,
            item.snippet.publishedAt,
            item.snippet.description,
            null,
            null)
        });
      });
  }


  paginationFrom(pageEvent) {
    return ((pageEvent.pageIndex === 0) ? pageEvent.pageIndex : (pageEvent.pageIndex) * pageEvent.pageSize );
  }

  paginationTo(pageEvent) {
    return this.paginationFrom(pageEvent) + this.pageSize;
  }

}
