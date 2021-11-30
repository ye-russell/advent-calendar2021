import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title = 'МЫ';
  content =
    '- Айша и Алтынай, лучшие подруги со школьной скамьи, которые иногда любят посвятить себя творчеству. Алтынай пришла с предложением к Айше от которого она не смогла отказаться 😊. Надеемся, что наш адвент календарь придется Вам по душе и возможно мы вернемся еще! Будьте здоровы и с наступающим Новым Годом!';
  team = [
    {
      position: 'Автор',
      name: 'Сейтметова А.',
      engCredentials: 'Written by Seitmetova A.',
    },
    {
      position: 'Дизайнер',
      name: 'Кабидешева А.',
      engCredentials: 'Designed by Kabidesheva A.',
    },
    {
      position: 'Разработчик',
      name: 'Бекберов Е.',
      engCredentials: 'Developed by Bekberov Ye.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  share() {
    const shareData = {
      title: 'Адвент Календарь!',
      text: 'Как преобразить свой обычный декабрь!',
      url: 'https://advent-calendar-2020.netlify.app/'
    }
    navigator.share(shareData);
  }
}
