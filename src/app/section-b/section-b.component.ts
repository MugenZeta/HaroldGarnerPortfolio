import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.css']
})
export class SectionBComponent {
  @Input() sectionTitle = "";
  @Input() sectionContent = "";
}
