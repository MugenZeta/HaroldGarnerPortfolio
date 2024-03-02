import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { projects } from "./project-interface";
import { PROJECT_INFO } from "./project-list";

import {IconsService} from "../icon-service/icons.service";
@Injectable({providedIn: 'root'})

export class ProjectService {
  constructor(private http : HttpClient) { }

  getProjects(): Observable<any> {
      return this.http.get<any>('https://api.github.com/users/MugenZeta/repos');
  }

  /*
  name : string = "";
  getName() : string{return this.name;}
  setName(name: string):string {
    return this.name = name;
  }
  // @ts-ignore

  getProjectByName(name: string) {
    name = this.getName();
    for(let index = 0; index < PROJECT_INFO.length; index++) {
      if (name === PROJECT_INFO[index].projectName) {
        return PROJECT_INFO[index];

      } else if(index == PROJECT_INFO.length || name === "") {
        this.setName("TEST TITLE 1");
        this.getProjectByName("TEST TITLE 1");
      }
    }
  }

  getProjectDescription(name: string): string {
    name = this.getName()
    // @ts-ignore
    return this.getIconByName(name).iconSource;
  }

  getIconDataURL(name: string): string {
    name = this.getName()
    // @ts-ignore
    return this.getIconByName(name).iconUrl
  }

  public getIconDataAltText(name: string): string{
    name = this.getName();
    // @ts-ignore
    return this.getIconByName(name).iconAltText
  }*/
}
