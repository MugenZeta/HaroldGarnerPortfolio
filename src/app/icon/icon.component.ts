import {Component, Input, OnInit} from '@angular/core';
import { icons } from "../../app-helpers/icon-loader";
import { IconsService } from "../../app-helpers/icons.service";
import {getIconData} from "../../app-helpers/icon-helpers";
import {ICONS} from "../../app-helpers/icon-list";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit{
  selectedIcon?: icons;
  @Input() name : string = "";
  constructor(private iService: IconsService) {}

  ngOnInit() {
    this.getIconByName(this.name);
  }

  getIcons(): void {
    this.iService.getIcons();
  }

  getIconByName(name: string): void{
    return this.iService.getIconByName(this.name);
  }

  protected readonly ICONS = ICONS;

}
