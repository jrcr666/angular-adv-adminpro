import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public theme: HTMLElement | null = document.getElementById('theme');
  public currentTheme = 'default';
  public lightThemes = ['default', 'green', 'red', 'blue', 'purple', 'megna'];
  public darkThemes = [
    'default-dark',
    'green-dark',
    'red-dark',
    'blue-dark',
    'purple-dark',
    'megna-dark',
  ];

  constructor() {
    const defaultTheme = localStorage.getItem('theme');

    if (defaultTheme && this.theme) {
      const data = JSON.parse(defaultTheme);
      this.theme.setAttribute('href', data.url);
    }

    if (defaultTheme && !this.currentTheme) {
      this.currentTheme = JSON.parse(defaultTheme).name;
    }
  }

  changeTheme(name: string) {
    const url: string = `./assets/css/colors/${name}.css`;

    if (this.theme) {
      this.currentTheme = name;
      this.theme.setAttribute('href', url);
      localStorage.setItem('theme', JSON.stringify({ url, name }));
    }
  }

  checkCurrentTheme(name: string) {
    return this.currentTheme === name;
  }
}
