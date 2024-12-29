import {Component, Input, OnInit} from '@angular/core';
import {IconsService} from "../../services/icon-service/icons.service";


@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.css']
})
export class CircleButtonComponent implements OnInit{

  constructor(private iService: IconsService) {}

  @Input() name: string = "";
  ngOnInit() {
    this.iService.name = this.name;
  }

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
