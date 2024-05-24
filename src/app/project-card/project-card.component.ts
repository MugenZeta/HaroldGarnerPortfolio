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
  @Input() name: string = "";

  ngOnInit(): void {
      this.getProject();
      this.showData();
      this.ProjectService.name = this.name;
  }

  showData() {
    this.ProjectService.projectData.subscribe(
      projectData => console.log(projectData));
    }

  getProject(): void {
      this.ProjectService.getProjects().subscribe( data => { this.data = data;
      console.log(this.data)}
      )
  }

  getTitle(name:string):string {return this.name}
  getDescription(name:string):string {return this.name;}
  getScreenshotName(name:string):string {return this.name;}
  getUrl(name:string):string {return this.name;}


}
