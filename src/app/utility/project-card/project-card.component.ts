import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() image: string;
  @Input() side: string;
  @Input() description: string;
  @Input() githubLink: string;

  constructor() { }

  ngOnInit() {
    this.side = this.side || 'right';
    this.image = 'url(../../../assets/projects/' + this.image + ')';
    this.description = this.description.replace(new RegExp('\n', 'g'), '<br>');
  }

}