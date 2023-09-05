import {Component, Input} from '@angular/core';
import {icons} from "../../app-helpers/icon-loader";

// @ts-ignore
@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.css']
})
export class SquareButtonComponent{

  @Input() icon: icons | undefined;
}
