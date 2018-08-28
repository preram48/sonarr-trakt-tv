import { Component, OnInit } from '@angular/core';
import { SonarrService } from '../shared/services';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [SonarrService]
})
export class BannerComponent implements OnInit {
  public showErrorMessage = false;
  constructor(private sonarrService: SonarrService) { }

  ngOnInit() {
    setInterval(() => {
      this.healthCheck();
    }, 10000);

    this.healthCheck();
  }

  healthCheck() {
    this.sonarrService.fetchProfiles().subscribe(() => {
      this.showErrorMessage = false;;
    }, () => {
      this.showErrorMessage = true;
    });
  }
}
