import {Component, Input, OnInit} from '@angular/core';
import { IconsService } from "../../app-helpers/icons.service";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit{
  constructor(private iService: IconsService) {
  }
  @Input() name: string = this.iService.name;

  ngOnInit() {
    this.getIconByName(this.name);
  }

  getIcons(): void {
    this.iService.getIcons();
  }

  getIconByName(name: string): void{
    this.iService.getIconByName(this.name);
  }

  public getSource(name: string): void{
   this.iService.getIconDataSource(this.name)
  }

  public getUrl(name: string): void{
    this.iService.getIconDataURL(this.name);
  }

  public getALtText(name: string): void{
    this.iService.getIconDataAltText(this.name);
}

}
