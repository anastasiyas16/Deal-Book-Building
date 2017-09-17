import {Component, OnInit, OnDestroy} from '@angular/core';
import {Video} from "../shared/youtube/video.model";
import {VideoCategory} from "../shared/youtube/video-category.model";
import {YoutubeAPIService} from "../shared/youtube/youtube-api.service";
import {YoutubeInteractionService} from "../shared/youtube/youtube-interaction.service";

@Component({
  selector: 'oas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private regionCode: string = "US";
  public swiperList: Video[] = [];
  public videoCategories: VideoCategory[] = [];
  public animationOnComponentEnter = 'route-enter-staggered';
  public swiperConfig: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 5,
    direction: 'horizontal',
    keyboardControl: true,
    loop: true,
    autoplay: 1,
    breakpoints: {
      512: {slidesPerView: 1}, // when window width is <= 512px
      1024: {slidesPerView: 2},
      1440: {slidesPerView: 3},
      1920: {slidesPerView: 4},
      2560: {slidesPerView: 5},
      3560: {slidesPerView: 6},
      4560: {slidesPerView: 7}
    }
  };

  constructor(private youtubeAPIService: YoutubeAPIService, private youtubeInteractionService: YoutubeInteractionService) {
  }

  ngOnInit() {
    // Get video categories
    this.youtubeAPIService.getVideoCategories(this.regionCode)
      .subscribe(data => {
        this.videoCategories = data.items.map(item => {
          return new VideoCategory(
            item.id,
            item.snippet.channelId,
            item.snippet.title);
        });
        this.getVideosByCategory();
      });
    // Search for live videos
    this.youtubeAPIService.searchLiveVideos("games")
      .subscribe(data => {
        this.swiperList = data.items.map(item => {
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

  ngOnDestroy() {
  }

  private getVideosByCategory() {
    for (let videoCategory of this.videoCategories) {
      this.youtubeAPIService.getVideosByCategory(this.regionCode, videoCategory.id)
        .subscribe(data => {
          let videos: Video[] = data.items.map(item => {
            return new Video(
              item.id,
              item.snippet.title,
              item.snippet.thumbnails.medium.url,
              item.snippet.thumbnails.high.url,
              item.snippet.channelTitle,
              item.snippet.channelId,
              item.snippet.publishedAt,
              item.snippet.description,
              item.statistics.viewCount,
              item.contentDetails.duration
            )
          });
          videoCategory.setVideos(videos);
        });
    }
  }

}
