import {Component, OnInit} from '@angular/core';
import { icons } from "../../app-helpers/icon-loader";
import { IconsService } from "../../app-helpers/icons.service";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit{
  constructor(private iService: IconsService) {}

  ngOnInit() {
    this.getIcons();
  }

  getIcons(): void {
    this.iService.getIcons();
  }

}
