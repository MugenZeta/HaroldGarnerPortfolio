import { Component, Input } from '@angular/core';
import {ICONS} from "../../app-helpers/icon-list";

@Component({
  selector: 'app-section-a',
  templateUrl: './section-a.component.html',
  styleUrls: ['./section-a.component.css']
})
export class SectionAComponent {
  @Input() sectionTitle: string = "";
  @Input() sectionContent: string = "";
  @Input() showExtendedContent: boolean = false;

  LinkedIn: string = "LinkedIn";
  Github: string = "Github";
  Angular: string = "Angular";
  Bootstrap5 : string = "Bootstrap 5";
  Django : string = "DJango";
  GitLab : string = "Gitlab";
  HTML : string = "HTML5";
  Folder: string = "Folder";
  Java: string = "Java";
  Javascript : string = "Javascript";
  NodeJS: string = "NodeJS";
  NPM: string = "NPM";
  Postgresql: string = "Postgresql";
  Python: string = "Python";
  React: string = "React";
  SASS: string = "SASS";
  Typescript: string = "Typescript";
  SquareSpace: string = "SquareSpace";

  buttonCount: number = 14;
}
