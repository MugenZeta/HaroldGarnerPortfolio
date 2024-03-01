import {Injectable} from '@angular/core';

import {icons} from "./icon-loader";
import {ICONS} from "./icon-list";


@Injectable({providedIn: 'root'})

export class IconsService {

  name : string = "";
  getName() : string{return this.name;}
  setName(name: string):string {
    return this.name = name;
}

  private findIconByName(name : string){
    return ICONS.find(icon =>icon.iconName === name) || null;
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


  getIconDataSource(name: string): string {
    name = this.getName();
    const icon = this.getIconByName(name);
    if (!icon) {
      throw new Error(`Icon not found with name: ${name}`);
    } else {
      return icon.iconSource;
    }
  }

  getIconDataURL(name: string): string {
      name = this.getName();
      const icon = this.getIconByName(name);
      if (!icon) {
        throw new Error(`Icon not found with name: ${name}`);
      } else {
        return icon.iconUrl;
      }
  }

  public getIconDataAltText(name: string): string{
      name = this.getName();
      const icon = this.getIconByName(name);
      if(!icon){
        throw new Error(`Icon not found with name: ${name}`);
      } else {
        return icon.iconAltText;
      }
  }

}
