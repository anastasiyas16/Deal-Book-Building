import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {YoutubeAPIService} from "../shared/youtube/youtube-api.service";
import {YoutubeDataConverter} from "../shared/youtube/youtube-data-converter";
import {Video} from "../shared/youtube/video.model";
import {Comment} from "../shared/youtube/comment.model";

@Component({
  selector: 'oas-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {

  public video: Video;
  public comments: Comment[];

  constructor(private youtubeAPIService: YoutubeAPIService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.youtubeAPIService.getVideoById(params.get('id')))
      .subscribe(data => {
        this.video = YoutubeDataConverter.convertVideo(data)[0];
        this.youtubeAPIService.getCommentsByVideoId(this.video.videoId)
          .subscribe(data => {
            this.comments = YoutubeDataConverter.convertComments(data);
          });
      });
  }

}
