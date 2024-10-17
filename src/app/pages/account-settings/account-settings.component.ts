import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``,
})
export class AccountSettingsComponent implements OnInit {
  public lightThemes;
  public darkThemes;

  constructor(private settingsService: SettingsService) {
    this.lightThemes = settingsService.lightThemes;
    this.darkThemes = settingsService.darkThemes;
  }

  getClasses(theme: string): { [key: string]: boolean } {
    return {
      working: this.settingsService.checkCurrentTheme(theme),
      selector: true,
      [`${theme}-theme`]: true,
    };
  }

  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }

  ngOnInit() {}
}
