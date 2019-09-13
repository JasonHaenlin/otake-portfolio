import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.scss']
})
export class TimeCardComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() venue: string;
  @Input() date: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
    this.image = 'url("../../../assets/' + this.image + '")';
  }


}
