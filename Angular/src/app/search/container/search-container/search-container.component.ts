import { Component } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Video } from 'src/app/shared/models/search.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent {
  inputTouched = false;
  loading = false;
  videos: Video[] = [];
  constructor(private searchService: SearchService, private router: Router,
    public authService: AuthService) { }
  handleSearch(inputValue: string) {
    this.loading = true;
    this.searchService.getVideos(inputValue)
      .subscribe((items: any) => {
        this.videos = items.map((item: any) => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          };
        });
        this.inputTouched = true;
        this.loading = false;
      });
  }
  async LogOutSubmit()
  {
      
      this.loading = true;
      this.authService.SignOut();
      this.router.navigate(['login']);
      console.log('logged out');
  }
  async ProfileSubmit()
  {
      this.router.navigate(['profile']);
      console.log('profile');
  }
  async ChannelsSubmit()
  {
      this.router.navigate(['channel']);
      console.log('channel');
  }
}
