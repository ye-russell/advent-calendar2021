import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Day } from '../day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day: Day | undefined;
  img: string = '';
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.img = '../../../assets/pics/' + this.day!.number + '.png'
  }

}
