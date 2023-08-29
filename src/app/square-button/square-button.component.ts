import {Component, Input, OnInit} from '@angular/core';
import {IconsService} from "../../app-helpers/icons.service";

// @ts-ignore
@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.css']
})
export class SquareButtonComponent implements OnInit{
  icons: IconsService[]  = [];
  constructor(private iconsService: IconsService) {}
  ngOnInit(): void {
    this.getIcons();
  }

  getIcons(): void {
    this.iconsService.getIcons();
  }
}
