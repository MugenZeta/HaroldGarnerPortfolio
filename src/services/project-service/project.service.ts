import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { projects } from "./project-interface";

import {IconsService} from "../icon-service/icons.service";
@Injectable({providedIn: 'root'})

export class ProjectService {
  constructor(private http : HttpClient) { }

  name: string =""
  getName(): string{return this.name}
  setName(name: string):string {return this.name;}


  getProjects(): Observable<projects[]> {
          return this.http.get<projects[]>('https://api.github.com/users/MugenZeta/repos');
  }

  projectData = this.getProjects().pipe(
      map( projectData => projectData.map
        (project => ({
          name: project.name,
          description: project.description,
          RepoScreenshot: project.screenshot,
          html_url: project.html_url
        }))));

  parsedData:  Observable<{ name: string, description: string, RepoScreenshot: string, html_url: string }[]> =  this.projectData;

  private findProjectByName(name: string): Observable<{
    name: string;}[]> {
    return this.parsedData.pipe(
          map(projects => projects.filter(project => project.name))
        );
  }

}
