import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project-service/project.service";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit{

  constructor(private ProjectService: ProjectService) {
  }
  data: any;
  @Input() ProjectName: string = "";
  @Input() ProjectDescription: string = "";

  ngOnInit(): void {
      this.getProject();
  }

  getProject(): void {
      this.ProjectService.getProjects().subscribe( data => { this.data = data;
      console.log(this.data)}
      )
  }

}
