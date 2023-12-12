import { Component } from '@angular/core';
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  NavBarList: any[] = [
    {
      "item": "About Me"
    },
    {
      "item": "Projects"
    },
    {
      "item": "Experience"
    },
    {
      "item": "Contact Me"
    },
    {
      "item": "Resume"
    }
  ];

  LinkedIn: string = "LinkedIn";
  Github: string = "Github";
}
