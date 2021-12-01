import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;

  content = [
    {
      name: 'Адвент Календарь',
      link: '#calendar',
    },
    {
      name: 'О Нас',
      link: '#about',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  share() {
    const shareData = {
      title: 'Адвент Календарь!',
      text: 'Как преобразить свой обычный декабрь!',
      url: 'https://advent-calendar-2020.netlify.app/'
    }
    navigator.share(shareData);
  }
}
