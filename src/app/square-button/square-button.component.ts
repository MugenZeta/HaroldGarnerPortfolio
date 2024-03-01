import {Component, Input, OnInit} from '@angular/core';
import {IconsService} from "../../services/icon-service/icons.service";

// @ts-ignore
@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.css']
})
export class SquareButtonComponent implements OnInit{

  constructor(private iService: IconsService) {}

  @Input() name: string = "";

  ngOnInit() {
    this.iService.name = this.name;
    console.log(`the iService Name is NAVBAR:${this.iService.name}`);
  }


  getIconByName = (name: string): string => {
    this.iService.setName(name);
    // @ts-ignore
    name = this.iService.getIconByName(this.name).iconName;
    console.log(`Current Name is NAVBAR: ${name}`);
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
    console.log(`get URL for NAVBAR: ${name}`);
    return name;
  }

  public getAltText = (name: string): string => {
    name = this.iService.getIconDataAltText(this.name);
    console.log(`get alt text for NAVBAR: ${name}`);
    return name;
  }

}
