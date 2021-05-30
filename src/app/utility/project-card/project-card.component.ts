import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() image!: string;
  @Input() description!: string;
  @Input() githubLink!: string;
  @Input() videoLink?: string;
  @Input() websiteLink?: string;
  @Input() title!: string;
  @Input() techno!: string;
  @Input() skills: string[] = [];

  constructor() { }

  ngOnInit() {
    this.image = 'assets/projects/' + this.image;
    this.description = this.description.replace(new RegExp('\n', 'g'), '<br>');
  }

}
