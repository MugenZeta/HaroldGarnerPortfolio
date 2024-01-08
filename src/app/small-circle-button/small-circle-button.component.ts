import {Component, Input, OnInit} from '@angular/core';
import {IconsService} from "../../app-helpers/icons.service";

@Component({
  selector: 'app-small-circle-button',
  templateUrl: './small-circle-button.component.html',
  styleUrls: ['./small-circle-button.component.css']
})
export class SmallCircleButtonComponent  implements OnInit{

  constructor(private iService: IconsService) {}

  @Input() name: string = "";
  ngOnInit() {
    this.iService.name = this.name;
    console.log(`the iService Name is:${this.iService.name}`);
  }

  getIcons(): void {
    this.iService.getIcons();
  }


  getIconByName = (name: string): string => {
    // @ts-ignore
    name = this.iService.getIconByName(this.name).iconName;
    console.log(`Current Name is: ${name}`);
    return name;
  }

  public getSource = (name: string): string =>{
    this.iService.setName(name);
    name = this.iService.getIconDataSource(this.name);
    console.log(name);
    return name;
  }

  public getUrl = (name: string): string => {
    this.iService.setName(name);
    name = this.iService.getIconDataURL(this.name);
    console.log(`get URL for: ${name}`);
    return name;
  }

  public getAltText = (name: string): string => {
    name = this.iService.getIconDataAltText(this.name);
    console.log(`get alt text for: ${name}`);
    return name;
  }

}
