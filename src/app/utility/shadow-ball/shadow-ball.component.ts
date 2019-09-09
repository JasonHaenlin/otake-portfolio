import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shadow-ball',
  templateUrl: './shadow-ball.component.html',
  styleUrls: ['./shadow-ball.component.scss']
})
export class ShadowBallComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
    this.text = this.text || '';
  }

}
