import {Injectable, Input} from '@angular/core';

import {icons} from "./icon-loader";
import {ICONS} from "./icon-list";


@Injectable({providedIn: 'root'})

export class IconsService {

  name : string = "";
  getName() : string{return this.name;}
  getIcons(): icons[] {
    return ICONS;
  }

    // @ts-ignore
    getIconByName(name: string) {
    name = this.getName()
    for (let index = 0; index < ICONS.length; index++)
    {
      if (name === ICONS[index].iconName) {
        return ICONS[index];

      } else  { this.getIconByName("Folder");}
    }
  }

  getIconDataSource(name: string): string {
      name = this.getName()
      // @ts-ignore
      return this.getIconByName(name).iconSource;
  }

  getIconDataURL(name: string): string {
      name = this.getName()
      // @ts-ignore
      return this.getIconByName(name).iconUrl
  }

  public getIconDataAltText(name: string): string{
      name = this.getName();
      // @ts-ignore
      return this.getIconByName(name).iconAltText
  }

}
