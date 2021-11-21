import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  title = 'Адвент календарь';
  content =
    '— это пупсики шмупсики дупсики, я не знаю что писать тут будет текст Айши. Но мне все таки придется написать всякую фигню так как без нее не будет ясно что мы тут вообще задумали.';
  constructor() {}

  ngOnInit(): void {}
}
