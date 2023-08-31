import { Injectable } from '@angular/core';

import {icons} from "./icon-loader";
import {ICONS} from "./icon-list";


@Injectable({
  providedIn: 'root'
})
export class IconsService {


  getIcons(): icons[] { return ICONS;}
  getIcon(name: string): { iconName: icons }[] {
    let iconLocation: string[];
    iconLocation = this.getIcons().map(il => name);
  }
}
