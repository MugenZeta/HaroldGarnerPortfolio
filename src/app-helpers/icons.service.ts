import {Injectable, Input} from '@angular/core';

import {icons} from "./icon-loader";
import {ICONS} from "./icon-list";
import {getIconData} from "./icon-helpers";


@Injectable({
  providedIn: 'root'
})
export class IconsService {

  getIcons(): icons[] {
    return ICONS;}
  getIconByName(name: string) : void {
    return getIconData(name)
  }
}
