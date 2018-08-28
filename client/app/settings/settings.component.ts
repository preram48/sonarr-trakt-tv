import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SettingsService } from '../shared/services';


class Settings {
  hostname: string;
  port: number;
  apiKey: string;
  interval: number;
  id: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [SettingsService],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {
  public settings: Settings;

  constructor(private settingService: SettingsService) {
    this.settings = new Settings();
  }

  ngOnInit() {

    this.settingService.fetchSettings().subscribe(settings => this.settings = settings);
  }

  saveSettings() {
    if (this.settings.id) {
      this.settingService.updateSettings(this.settings.id, this.settings).subscribe(() => { });
    } else {
      this.settingService.createSettings(this.settings).subscribe(() => { });
    }
  }

}