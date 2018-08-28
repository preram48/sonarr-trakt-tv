import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListService, SonarrService, TraktService } from '../shared/services';
import { ListTypes } from '../shared/enums';
import { ListItem } from '../shared/models';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.css'],
  providers: [ListService, SonarrService, TraktService]
})
export class ListDialogComponent implements OnInit {

  public trakList: Array<any>;
  public listItem: ListItem;
  public folders: Array<any>;
  public profiles: Array<any>;
  public foundWatchlistResults: boolean = false;
  public watchlistError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private listService: ListService,
    private sonarrService: SonarrService,
    private traktService: TraktService) { }


  ngOnInit() {
    this.listItem = this.data;
    this.trakList = [{
      value: ListTypes.Watchlist,
      viewValue: 'Watchlist',
    }, {
      value: ListTypes.Popular,
      viewValue: 'Popular',
    }, {
      value: ListTypes.Trending,
      viewValue: 'Trending',
    }, {
      value: ListTypes.Custom,
      viewValue: 'Custom',
    }];

    this.sonarrService.fetchPaths().subscribe(folders => this.folders = folders);
    this.sonarrService.fetchProfiles().subscribe(profiles => this.profiles = profiles);
  }

  close(): void {
    this.dialogRef.close();
  }

  saveList(item) {
    this.foundWatchlistResults = false;
    this.watchlistError = false;
    if (item.id) {
      this.listService.updateList(item.id, item).subscribe(() => {
        this.close();
      });
    } else {
      item.enabled = true;
      this.listService.createList(item).subscribe(() => {
        this.close();
      });
    }
  }

  testList(item) {
    this.foundWatchlistResults = false;
    this.watchlistError = false;

    let sub = null;

    switch (item.listType) {
      case ListTypes.Watchlist:
        sub = this.traktService.fetchWatchlist(item.username);
        break;
      case ListTypes.Popular:
        sub = this.traktService.fetchPopularShows(item.years, item.ratings, item.limit);
        break;
      case ListTypes.Trending:
        sub = this.traktService.fetchTrendingShows(item.years, item.ratings, item.limit);
        break;
      case ListTypes.Custom:
        sub = this.traktService.fetchCustomListShows(item.username, item.listName, item.years, item.ratings, item.limit);
        break;
    }

    sub.subscribe(() => {
      this.foundWatchlistResults = true;
    }, (error) => {
      this.watchlistError = true;
    });
  }
}
