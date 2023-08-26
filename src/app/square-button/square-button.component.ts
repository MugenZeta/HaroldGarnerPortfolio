import { Component } from '@angular/core';
import {style} from "@angular/animations";

// @ts-ignore
@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.css']
})
export class SquareButtonComponent {
  iconList : any[] = [
    {
      "name": "LinkedIn",
      "url": "https://www.linkedin.com/in/harold-g-357923121/",
      "iconSource": "/src/site_assets/icons/linkedin-112.svg",
      "iconAltText": "LinkedIn"
    },
    {
      "name": "Github",
      "url": "https://github.com/MugenZeta",
      "iconSource": "/src/site_assets/iconmonstr-github-3.svg",
      "iconAltText": "Github"
    }
  ]
}
