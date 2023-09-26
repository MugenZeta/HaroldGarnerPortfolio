import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-a',
  templateUrl: './section-a.component.html',
  styleUrls: ['./section-a.component.css']
})
export class SectionAComponent {
  @Input() sectionTitle: string = "";
  @Input() sectionContent: string = "";
  @Input() showExtendedContent: boolean = false;
}