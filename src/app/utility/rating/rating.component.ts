import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() logo: string;
  @Input() rate: number;
  @Input() tooltip: string;

  public stars: string[] = [
    'far',
    'far',
    'far',
    'far',
    'far',
  ];

  constructor() { }

  ngOnInit() {
    this.logo = this.logo || '';
    if (this.rate) {
      for (let i = 0; i < this.rate; i++) {
        this.stars[i] = 'fas';
      }
    }
  }

  getLogo() {
    return 'url("../../../assets/logos/' + this.logo + '")';
  }
}
