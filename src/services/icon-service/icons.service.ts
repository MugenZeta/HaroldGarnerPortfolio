import {Injectable} from '@angular/core';

import {ICONS} from "./icon-list";


@Injectable({providedIn: 'root'})

export class IconsService {

  name : string = "";
  setName(name: string):string {return this.name = name;}

  private findIconByName(name : string){
    return ICONS.find(icon => icon.iconName === name) || null;
  }

  getIconByName(name: string){
    let icon = this.findIconByName(name);
    if(icon){
      return icon;
    } else {
      this.setName("Folder")
      return this.findIconByName("Folder");
    }
  }

}
