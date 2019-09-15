import { Component, OnInit } from '@angular/core';
import { animation } from 'src/app/animation';

@Component({
  selector: 'app-home-timeline',
  templateUrl: './home-timeline.component.html',
  styleUrls: ['./home-timeline.component.scss'],
  animations: [animation]
})
export class HomeTimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
