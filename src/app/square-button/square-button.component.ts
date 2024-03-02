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

  ngOnInit() {}

  setNameAndReturnIcon(name: string) {
    this.iService.setName(name);
    return this.iService.getIconByName(this.name);
  }

  getSource(name: string): string {
    const icon = this.setNameAndReturnIcon(name);
    return icon ? icon.iconSource : '';
  }

  getUrl(name: string): string {
    const icon = this.setNameAndReturnIcon(name);
    return icon ? icon.iconUrl : '';
  }

  getAltText(name: string): string {
    const icon = this.setNameAndReturnIcon(name);
    return icon ? icon.iconAltText : '';
  }
}
