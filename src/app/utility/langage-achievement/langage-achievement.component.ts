import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-langage-achievement',
  templateUrl: './langage-achievement.component.html',
  styleUrls: ['./langage-achievement.component.scss'],
})
export class LangageAchievementComponent implements OnInit {

  @Input() flag: string;
  @Input() name: string;
  @Input() percentage: number;

  constructor() { }

  ngOnInit() { }

  getBackgroundFlag() {
    return 'url("../../../assets/flags/' + this.flag + '.svg")';
  }

  getStrokeDasharray() {
    return (2.6 * this.percentage) + '% , ' + (260 - (2.6 * this.percentage)) + '%';
  }

}
