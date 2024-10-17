import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/',
        },
        {
          title: 'Progress Bar',
          url: 'progress',
        },
        {
          title: 'Gráfica 1',
          url: 'grafica1',
        },
      ],
    },
  ];

  constructor() {}
}
