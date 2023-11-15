import { Component } from '@angular/core';
import {IconsService} from "../../app-helpers/icons.service";


@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.css']
})
export class CircleButtonComponent {
  LinkedIn: string = "LinkedIn";
  Github: string = "Github";
  Bootstrap5 : string = "Bootsrap 5";
}
