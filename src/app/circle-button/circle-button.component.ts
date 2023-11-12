import { Component } from '@angular/core';
import {ICONS} from "../../app-helpers/icon-list";

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.css']
})
export class CircleButtonComponent {

  protected readonly ICONS = ICONS;
}
