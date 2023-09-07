import {Component, OnInit} from '@angular/core';
import { icons } from "../../app-helpers/icon-loader";
import { IconsService } from "../../app-helpers/icons.service";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit{
  selectedIcon?: icons;
  constructor(private iService: IconsService) {}

  ngOnInit() {
    this.getIcons();
  }

  getSelectedIcon(sIcon: icons): void{
    this.selectedIcon = sIcon;
  }
  getIcons(): void {
    this.iService.getIcons();
  }

}
