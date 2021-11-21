import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  content = [
    {
      name: 'Адвент Календарь',
      link: '/',
    },
    {
      name: 'О Нас',
      link: '/',
    },
    {
      name: 'Поделиться',
      link: '/',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
