import {Component, Input, OnInit} from '@angular/core';
import {IconsService} from "../../services/icon-service/icons.service";

@Component({
    selector: 'app-small-circle-button',
    templateUrl: './small-circle-button.component.html',
    styleUrls: ['./small-circle-button.component.css']
})
export class SmallCircleButtonComponent implements OnInit {

    @Input() name: string = "";

    constructor(private iService: IconsService) {
    }

    ngOnInit() {
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
