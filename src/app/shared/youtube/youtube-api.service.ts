import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class YoutubeAPIService {

  constructor(private http: Http) {
  }

  private extractData(response: Response) {
    return response.json();
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

  public searchVideos(query: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}` +
      '&maxResults=50' +
      '&type=video' +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
      .map(response => response.json())
  }

  public getCommentsByVideoId(videoId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}` +
      '&maxResults=50' +
      '&order=relevance' +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
      .map(this.extractData)
  }

  public getVideoById(videoId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}` +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
      .map(this.extractData)
  }

  public getVideoCategories(regionCode: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=${regionCode}` +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
      .map(this.extractData)
  }

  public getVideosByCategory(regionCode: string, videoCategoryId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet,contentDetails,statistics&regionCode=${regionCode}` +
      `&videoCategoryId=${videoCategoryId}` +
      '&maxResults=6' +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
      .map(this.extractData)
  }

  public searchLiveVideos(query: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}` +
      '&maxResults=25' +
      '&type=video' +
      '&eventType=live' +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
      .map(response => response.json())
  }


}
