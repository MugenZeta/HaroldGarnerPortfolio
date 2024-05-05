import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { projects } from "./project-interface";

import {IconsService} from "../icon-service/icons.service";
@Injectable({providedIn: 'root'})

export class ProjectService {
  constructor(private http : HttpClient) { }

  getProjects(): Observable<projects[]> {
          return this.http.get<projects[]>('https://api.github.com/users/MugenZeta/repos');
  }

  projectData = this.getProjects().pipe(
      map( projectData => projectData.map
        (project => ({
          name: project.name,
          description: project.description,
          RepoScreenshot: project.screenshot,
          html_url: project.html_url,
          tech: project.tech
        }))));


}
