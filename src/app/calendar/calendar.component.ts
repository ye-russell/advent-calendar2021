import { Component, OnInit } from '@angular/core';
import { DayListService } from '../day-list.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DayComponent } from '../day/day.component';
import { Day } from '../day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendar = {
    title1: 'Адвент календарь 2021 года',
    title2: 'Как преборазить свой обычный декабрь',
    content: 'Придуман и разработан для усиления праздничного настроения',
  }
  constructor(public dayListService: DayListService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  handleClick(day: Day): void {
    const modalRef = this.modalService.open(DayComponent, { size: 'xl' });
    modalRef.componentInstance.day = day;
  }
}
